/**
 * in general virtual DOM is created and compared and only the changes made are updated
 * loading occurs because the whole DOM is recreated 
 * Virtual DOM : react user fiber to update the virtual DOM 
 * reference : https://github.com/acdlite/react-fiber-architecture
 * the process of injecting javascript into a webpage is called hydration
 * Reconcialation - recursive function that reconsiders which component to update
 * The algorithm React uses to diff one tree with another to determine which parts need to be changed.
 * update : A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render
 * 
 * Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a
 *  React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, 
 * in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated.
 *  The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.
 * 
 * 
 * Although Fiber is a ground-up rewrite of the reconciler, the high-level algorithm described in the React docs will be largely the same. The key points are:
 * 1.  Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.
 * 2.  Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."
 * 
 * The key points are:
 * In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience. 
 * 
 * Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
 * 
 * A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be 
 * smart and make those decisions for you.
 * 
 * 
 * 
 * let [counter, setCounter] = useState(15)

  const addValue = () => {

    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
  }
    here the value will not get updated at once.
    So here the function calls will be sent in batches. So, react will see them as the same operation and perform it only once. So, the counter will increase by only 1 count.


To increase it by four counts, use the callback which the setCounter accepts and increase it one by one. So, the first function will be called first, the callback will be executed and the next function call will be executed.

eg. 

let [counter, setCounter] = useState(15)

const addValue = () => {
    setCounter(counter +1)
    setCounter((prevState) => counter + 1)
}

  }
 */