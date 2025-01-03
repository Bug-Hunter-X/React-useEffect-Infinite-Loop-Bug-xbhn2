# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug: an infinite loop caused by updating state within a `useEffect` hook without proper dependency management.  The `bug.js` file contains the buggy code, while `bugSolution.js` provides the corrected version.

The issue arises from updating the `count` state within the `useEffect` hook without specifying any dependencies in the dependency array (`[]`). This causes the effect to run repeatedly, leading to an infinite loop. The solution involves either adding the state `count` to the dependency array, or employing conditional logic within the effect to avoid unnecessary updates.