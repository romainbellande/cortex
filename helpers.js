"use strict";


const path = require("path");

const _root = path.resolve(process.cwd(), "."); // project root folder

/*
  Function that returns the relative path to the given file, from the root of the workspace
  Pass in a path from anywhere in the project and get the path to that file, relative to the workspace root
 */
const root = path.join.bind(path, _root);

exports.root = root;
