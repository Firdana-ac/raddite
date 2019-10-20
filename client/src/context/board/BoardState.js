// @flow
import React, { useReducer, Fragment, useEffect, useContext } from 'react';
import BoardRequests from '../../requests/BoardRequests';
import PostRequests from '../../requests/PostRequests';
import reducer from '../reducer';
import BoardContext from './boardContext';
import RedirectContext from '../redirect/redirectContext';

const BoardState = (props: any) =>
{
   const { setRedirect } = useContext(RedirectContext);

   const initialState = {
      errors: null,
      boards: null,
      selectedBoard: null
   };

   const[state, dispatch] = useReducer(reducer, initialState);

   const boardRequests = new BoardRequests(dispatch);
   const postRequests = new PostRequests(dispatch);

   const setSelectedBoard = async (boardName: string) =>
   {
      let selectedBoard = state.boards.filter(
         board => board.name.toLowerCase() === boardName.toLowerCase()
      );

      if(selectedBoard.length > 0)
      {
         selectedBoard = selectedBoard[0];

         dispatch({ selectedBoard });
         setRedirect(selectedBoard.name);

         !selectedBoard.posts && fillPosts(selectedBoard.id);
      }
      else
      {
         dispatch({ selectedBoard: null });
         setRedirect('');
      }
   }

   const fillPosts = async (boardId: int) =>
   {
      const boards = state.boards;
      boards.filter(board => board.id === boardId)[0].posts = await postRequests.FetchPosts(boardId);

      dispatch({ boards });
   }

   const fillBoards = async () =>
   {
      const boards = await boardRequests.FetchBoards();
      dispatch({ boards });
   }

   let errors = null;

   useEffect(() => {
      if(! state.boards)
      {
         fillBoards();
      }
   }, []);

   return (
      <Fragment>
         {state.errors
         ?  state.errors.map(error => <h1>{error}</h1>)
         :  <BoardContext.Provider
               value={{ 
                  boards: state.boards,
                  selectedBoard: state.selectedBoard,
                  setSelectedBoard
               }}>
               { props.children }
            </BoardContext.Provider>
         }
      </Fragment>
   )
}

export default BoardState;