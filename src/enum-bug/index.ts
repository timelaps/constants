const enumBug = !{
    toString: null
}.propertyIsEnumerable('toString')
export {
  enumBug
}
