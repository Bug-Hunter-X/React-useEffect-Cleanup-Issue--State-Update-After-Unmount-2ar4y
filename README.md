# React useEffect Cleanup Issue
This repository demonstrates a common issue in React applications where a `useEffect` hook attempts to update state after the component has unmounted.  This can lead to warnings in the console and potentially unexpected behavior.

The `bug.js` file shows the problematic code.  The `bugSolution.js` file provides the corrected code.

## Problem
The issue arises when a `setTimeout` (or similar asynchronous operation) is used within a `useEffect` hook. If the component unmounts before the timeout completes, the state update will still occur, resulting in a warning and potential data inconsistencies.

## Solution
The solution involves using a cleanup function within the `useEffect` hook to clear the timeout (or cancel other asynchronous operations) before the component unmounts. This ensures that the state update is prevented if the component is no longer mounted. 