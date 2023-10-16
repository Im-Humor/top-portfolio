/* eslint-disable no-console */
/* eslint-disable no-plusplus */

import "./style.css";
import { snapScroll, addFooterFunc } from "./scroll";

document.addEventListener("scrollend", snapScroll);
addFooterFunc();
