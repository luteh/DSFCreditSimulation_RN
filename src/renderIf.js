/**
 * Created by Luteh on 12/07/2017.
 */
'use strict';
const isFunction = input => typeof input === 'function';
export default predicate => elemOrThunk =>
    predicate ? (isFunction(elemOrThunk) ? elemOrThunk() : elemOrThunk) : null;