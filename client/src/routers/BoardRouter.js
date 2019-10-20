// @flow

import React, { Fragment, useContext, useEffect, useState } from 'react';
import BoardContext from '../context/board/boardContext';
import Home from '../components/pages/Home';
import Board from '../components/pages/Board';
import { BrowserRouter as Route, Switch, useParams, Redirect } from 'react-router-dom';

const BoardRouter = (props: any) =>
{
   const { boardName } = useParams();

   const { setSelectedBoard, boards } = useContext(BoardContext);

   useEffect(() => 
   {
      if(boards)
      {
         setSelectedBoard(boardName);
      }
   }, [boards]);

   return <Fragment>{props.children}</Fragment>;
}

export default BoardRouter;