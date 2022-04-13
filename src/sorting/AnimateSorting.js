import React, { useState, useLayoutEffect, useEffect, useRef } from "react";

// HELPER FUNCTIONS

// Figures out the actual space in the dom a child occupies, using its key
const calculateBoundingBoxes = children => {
    const boundingBoxes = {};

    React.Children.forEach(children, child => {
      const domNode = child.ref.current;
      const nodeBoundingBox = domNode.getBoundingClientRect();
  
      boundingBoxes[child.key] = nodeBoundingBox;
    });
  
    return boundingBoxes;
};

// figures out the previous state of a react state
const usePrevious = value => {
    const prevChildrenRef = useRef();

    useEffect(() => {
        prevChildrenRef.current = value;
    }, [value]);

    return prevChildrenRef.current;
};

// COMPONENT

// animation wrapper component
const AnimateSorting = ({children, animationSpeed}) => {
    const [boundingBox, setBoundingBox] = useState({});
    const [prevBoundingBox, setPrevBoundingBox] = useState({});
    const prevChildren = usePrevious(children);

    useLayoutEffect(() => {
        const newBoundingBox = calculateBoundingBoxes(children);
        setBoundingBox(newBoundingBox);
    }, [children]);

    useLayoutEffect(() => {
        const prevBoundingBox = calculateBoundingBoxes(prevChildren);
        setPrevBoundingBox(prevBoundingBox);
    }, [prevChildren]);

    useEffect(() => {
        const hasPrevBoundingBox = Object.keys(prevBoundingBox).length;
        const numBoundingBoxesChanged = Object.keys(prevBoundingBox).length !== Object.keys(boundingBox).length;

        if (hasPrevBoundingBox && !numBoundingBoxesChanged) {
            React.Children.forEach(children, child => {
                const domNode = child.ref.current;
                const firstBox = prevBoundingBox[child.key];
                const lastBox = boundingBox[child.key];

                // making sure this component existed in previous state
                if (firstBox && lastBox) {
                    const changeInX = firstBox.left - lastBox.left;

                    if (changeInX) {
                        requestAnimationFrame(() => {
                            // before new children are rendered, invert child to its old position
                            domNode.style.transform = `translateX(${changeInX}px)`;
                            domNode.style.transition = "transform 0s";
    
                            requestAnimationFrame(() => {
                                // after that, remove the transition to play the animation
                                domNode.style.transform = "";
                                domNode.style.transition = `transform ${animationSpeed}ms`;
                            });
                        });
                    }
                }
                
            });
        }
    }, [boundingBox, prevBoundingBox, children]);
    return children;
};

export default AnimateSorting;