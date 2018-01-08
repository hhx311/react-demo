/**
 * Created by Jason
 * 自定义的promise中间件, 处理异步action对象(为函数)
 */

const isPromise = obj => obj && typeof obj.then === 'function';

let nextSeqId = 0;

const promiseMiddleware = ({dispatch}) => next => action => {
    const {types, promise, ...rest} = action;
    if (!isPromise(promise) || !(types && types.length === 3)) {
        return next(action);
    }
    const [STARTED, SUCCESS, FAILURE] = types;
    const seqId = ++nextSeqId;
    const dispatchIfValid = (action) => {
        if (seqId === nextSeqId) {
            return dispatch(action);
        }
    };

    dispatchIfValid({...rest, type: STARTED});
    return promise.then(result =>
        dispatchIfValid({...rest, type: SUCCESS, result})
    ).catch(error =>
        dispatchIfValid({...rest, type: FAILURE, error})
    );
};

export default promiseMiddleware;