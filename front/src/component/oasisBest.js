import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Table from "oasisTable";
import DB from "oasisDB";

export default function oasisBest() {
    return(
        <div class="component">
            <div class="bestItem">
                <div class="kurly">
                </div>
                <div class="oasis"></div>
                <div class="wingeat"></div>
            </div>
            <div class="discount">

            </div>
        </div>    
    );
}