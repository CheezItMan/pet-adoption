// Does not run in Node
// All browser specific stuff goes here

import React from "react";
import { hydrate } from "react-dom";
import App from "./App";

hydrate(<App /> document.getElementById('root'));