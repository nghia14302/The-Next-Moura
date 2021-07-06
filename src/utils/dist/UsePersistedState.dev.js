'use strict'

Object.defineProperty(exports, '__esModule', {
    value: true,
})
exports.usePersistedState = void 0

var _react = require('react')

var _LocalStorageUtils = _interopRequireDefault(require('./LocalStorageUtils'))

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj }
}

function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
}

function _nonIterableRest() {
    throw new TypeError('Invalid attempt to destructure non-iterable instance')
}

function _iterableToArrayLimit(arr, i) {
    if (
        !(
            Symbol.iterator in Object(arr) ||
            Object.prototype.toString.call(arr) === '[object Arguments]'
        )
    ) {
        return
    }
    var _arr = []
    var _n = true
    var _d = false
    var _e = undefined
    try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value)
            if (i && _arr.length === i) break
        }
    } catch (err) {
        _d = true
        _e = err
    } finally {
        try {
            if (!_n && _i['return'] != null) _i['return']()
        } finally {
            if (_d) throw _e
        }
    }
    return _arr
}

function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr
}

var usePersistedState = function usePersistedState(key, defaultvalue) {
    var _useState = (0, _react.useState)(function () {
            return _LocalStorageUtils['default'].getUser(key) || defaultvalue
        }),
        _useState2 = _slicedToArray(_useState, 2),
        state = _useState2[0],
        setState = _useState2[1]

    ;(0, _react.useEffect)(
        function () {
            _LocalStorageUtils['default'].setItem(key, state)
        },
        [key, state]
    )
    return [state, setState]
}

exports.usePersistedState = usePersistedState
