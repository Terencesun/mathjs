
const allClasses = {
  BigNumber: 'Function',
  Chain: 'Function',
  Complex: 'Function',
  Fraction: 'Function',
  Matrix: 'Function',
  DenseMatrix: 'Function',
  SparseMatrix: 'Function',
  Spa: 'Function',
  FibonacciHeap: 'Function',
  ImmutableDenseMatrix: 'Function',
  Index: 'Function',
  Range: 'Function',
  ResultSet: 'Function',
  Unit: 'Function',
  Help: 'Function',
  Parser: 'Function'
}

const allES6Classes = {
  ...allClasses,
  Parser: 'Function'
}

const allNodeClasses = {
  AccessorNode: 'Function',
  ArrayNode: 'Function',
  AssignmentNode: 'Function',
  BlockNode: 'Function',
  ConditionalNode: 'Function',
  ConstantNode: 'Function',
  IndexNode: 'Function',
  FunctionAssignmentNode: 'Function',
  FunctionNode: 'Function',
  Node: 'Function',
  ObjectNode: 'Function',
  OperatorNode: 'Function',
  ParenthesisNode: 'Function',
  RangeNode: 'Function',
  RelationalNode: 'Function',
  SymbolNode: 'Function'
}

const allErrorClasses = {
  ArgumentsError: 'Function',
  DimensionError: 'Function',
  IndexError: 'Function'
}

const allTypeChecks = {
  isNumber: 'Function',
  isComplex: 'Function',
  isBigNumber: 'Function',
  isFraction: 'Function',
  isUnit: 'Function',
  isString: 'Function',
  isArray: 'Function',
  isMatrix: 'Function',
  isDenseMatrix: 'Function',
  isSparseMatrix: 'Function',
  isRange: 'Function',
  isIndex: 'Function',
  isBoolean: 'Function',
  isResultSet: 'Function',
  isHelp: 'Function',
  isFunction: 'Function',
  isDate: 'Function',
  isRegExp: 'Function',
  isObject: 'Function',
  isNull: 'Function',
  isUndefined: 'Function',
  isAccessorNode: 'Function',
  isArrayNode: 'Function',
  isAssignmentNode: 'Function',
  isBlockNode: 'Function',
  isConditionalNode: 'Function',
  isConstantNode: 'Function',
  isFunctionAssignmentNode: 'Function',
  isFunctionNode: 'Function',
  isIndexNode: 'Function',
  isNode: 'Function',
  isObjectNode: 'Function',
  isOperatorNode: 'Function',
  isParenthesisNode: 'Function',
  isRangeNode: 'Function',
  isSymbolNode: 'Function',
  isChain: 'Function'
}

const allFunctions = {
  config: 'Function',
  bignumber: 'Function',
  boolean: 'Function',
  complex: 'Function',
  fraction: 'Function',
  index: 'Function',
  matrix: 'Function',
  sparse: 'Function',
  number: 'Function',
  string: 'Function',
  unit: 'Function',
  createUnit: 'Function',
  splitUnit: 'Function',
  derivative: 'Function',
  simplify: 'Function',
  rationalize: 'Function',
  qr: 'Function',
  lup: 'Function',
  slu: 'Function',
  lsolve: 'Function',
  lusolve: 'Function',
  usolve: 'Function',
  abs: 'Function',
  add: 'Function',
  cbrt: 'Function',
  ceil: 'Function',
  cube: 'Function',
  divide: 'Function',
  dotDivide: 'Function',
  dotMultiply: 'Function',
  dotPow: 'Function',
  exp: 'Function',
  expm1: 'Function',
  fix: 'Function',
  floor: 'Function',
  gcd: 'Function',
  hypot: 'Function',
  lcm: 'Function',
  log: 'Function',
  log10: 'Function',
  log1p: 'Function',
  log2: 'Function',
  mod: 'Function',
  multiply: 'Function',
  norm: 'Function',
  nthRoot: 'Function',
  nthRoots: 'Function',
  pow: 'Function',
  round: 'Function',
  sign: 'Function',
  sqrt: 'Function',
  square: 'Function',
  subtract: 'Function',
  unaryMinus: 'Function',
  unaryPlus: 'Function',
  xgcd: 'Function',
  bitAnd: 'Function',
  bitNot: 'Function',
  bitOr: 'Function',
  bitXor: 'Function',
  leftShift: 'Function',
  rightArithShift: 'Function',
  rightLogShift: 'Function',
  bellNumbers: 'Function',
  composition: 'Function',
  stirlingS2: 'Function',
  catalan: 'Function',
  arg: 'Function',
  conj: 'Function',
  im: 'Function',
  re: 'Function',
  intersect: 'Function',
  distance: 'Function',
  and: 'Function',
  not: 'Function',
  or: 'Function',
  xor: 'Function',
  concat: 'Function',
  cross: 'Function',
  ctranspose: 'Function',
  det: 'Function',
  diag: 'Function',
  dot: 'Function',
  eye: 'Function',
  expm: 'Function',
  filter: 'Function',
  flatten: 'Function',
  forEach: 'Function',
  identity: 'Function',
  inv: 'Function',
  kron: 'Function',
  map: 'Function',
  ones: 'Function',
  partitionSelect: 'Function',
  range: 'Function',
  reshape: 'Function',
  resize: 'Function',
  size: 'Function',
  sort: 'Function',
  sqrtm: 'Function',
  squeeze: 'Function',
  subset: 'Function',
  trace: 'Function',
  transpose: 'Function',
  zeros: 'Function',
  getMatrixDataType: 'Function',
  combinations: 'Function',
  factorial: 'Function',
  gamma: 'Function',
  kldivergence: 'Function',
  multinomial: 'Function',
  permutations: 'Function',
  pickRandom: 'Function',
  random: 'Function',
  randomInt: 'Function',
  compare: 'Function',
  compareNatural: 'Function',
  compareText: 'Function',
  deepEqual: 'Function',
  equal: 'Function',
  equalText: 'Function',
  larger: 'Function',
  largerEq: 'Function',
  smaller: 'Function',
  smallerEq: 'Function',
  unequal: 'Function',
  setCartesian: 'Function',
  setDifference: 'Function',
  setDistinct: 'Function',
  setIntersect: 'Function',
  setIsSubset: 'Function',
  setMultiplicity: 'Function',
  setPowerset: 'Function',
  setSize: 'Function',
  setSymDifference: 'Function',
  setUnion: 'Function',
  erf: 'Function',
  mad: 'Function',
  max: 'Function',
  mean: 'Function',
  median: 'Function',
  min: 'Function',
  mode: 'Function',
  prod: 'Function',
  quantileSeq: 'Function',
  std: 'Function',
  sum: 'Function',
  variance: 'Function',
  format: 'Function',
  print: 'Function',
  acos: 'Function',
  acosh: 'Function',
  acot: 'Function',
  acoth: 'Function',
  acsc: 'Function',
  acsch: 'Function',
  asec: 'Function',
  asech: 'Function',
  asin: 'Function',
  asinh: 'Function',
  atan: 'Function',
  atan2: 'Function',
  atanh: 'Function',
  cos: 'Function',
  cosh: 'Function',
  cot: 'Function',
  coth: 'Function',
  csc: 'Function',
  csch: 'Function',
  sec: 'Function',
  sech: 'Function',
  sin: 'Function',
  sinh: 'Function',
  tan: 'Function',
  tanh: 'Function',
  to: 'Function',
  clone: 'Function',
  isInteger: 'Function',
  isNegative: 'Function',
  isNumeric: 'Function',
  isPositive: 'Function',
  isPrime: 'Function',
  isZero: 'Function',
  isNaN: 'Function',
  typeOf: 'Function',
  compile: 'Function',
  evaluate: 'Function',
  help: 'Function',
  parse: 'Function',
  parser: 'Function',
  numeric: 'Function',
  addScalar: 'Function',
  divideScalar: 'Function',
  multiplyScalar: 'Function',
  equalScalar: 'Function',
  reviver: 'Function'
}

const allFunctionsExceptReviver = {
  ...allFunctions
}
delete allFunctionsExceptReviver.reviver

const allInstanceFunctions = {
  ...allFunctions,
  'import': 'Function',
  'var': 'Function',
  'eval': 'Function',
  'typeof': 'Function',
  typed: 'Function',
  core: 'Function',
  create: 'Function',
  chain: 'Function'
}

const allES6Functions = {
  ...allFunctions,
  typed: 'Function',
  core: 'Function',
  create: 'Function',
  chain: 'Function'
}

const allInstanceConstants = {
  true: 'boolean',
  false: 'boolean',
  null: 'null',
  Infinity: 'number',
  NaN: 'number',
  pi: 'number',
  tau: 'number',
  e: 'number',
  phi: 'number',
  E: 'number',
  LN2: 'number',
  LN10: 'number',
  LOG2E: 'number',
  LOG10E: 'number',
  PI: 'number',
  SQRT1_2: 'number',
  SQRT2: 'number',
  i: 'Complex',
  version: 'string'
}

const allES6Constants = {
  '_true': 'boolean',
  '_false': 'boolean',
  '_null': 'null',
  '_Infinity': 'number',
  '_NaN': 'number',
  pi: 'number',
  tau: 'number',
  e: 'number',
  phi: 'number',
  LN2: 'number',
  LN10: 'number',
  LOG2E: 'number',
  LOG10E: 'number',
  SQRT1_2: 'number',
  SQRT2: 'number',
  i: 'Complex',
  version: 'string'
}

const allPhysicalConstants = {
  speedOfLight: 'Unit',
  gravitationConstant: 'Unit',
  planckConstant: 'Unit',
  reducedPlanckConstant: 'Unit',
  magneticConstant: 'Unit',
  electricConstant: 'Unit',
  vacuumImpedance: 'Unit',
  coulomb: 'Unit',
  elementaryCharge: 'Unit',
  bohrMagneton: 'Unit',
  conductanceQuantum: 'Unit',
  inverseConductanceQuantum: 'Unit',
  magneticFluxQuantum: 'Unit',
  nuclearMagneton: 'Unit',
  klitzing: 'Unit',
  bohrRadius: 'Unit',
  classicalElectronRadius: 'Unit',
  electronMass: 'Unit',
  fermiCoupling: 'Unit',
  fineStructure: 'number',
  hartreeEnergy: 'Unit',
  protonMass: 'Unit',
  deuteronMass: 'Unit',
  neutronMass: 'Unit',
  quantumOfCirculation: 'Unit',
  rydberg: 'Unit',
  thomsonCrossSection: 'Unit',
  weakMixingAngle: 'number',
  efimovFactor: 'number',
  atomicMass: 'Unit',
  avogadro: 'Unit',
  boltzmann: 'Unit',
  faraday: 'Unit',
  firstRadiation: 'Unit',
  loschmidt: 'Unit',
  gasConstant: 'Unit',
  molarPlanckConstant: 'Unit',
  molarVolume: 'Unit',
  sackurTetrode: 'number',
  secondRadiation: 'Unit',
  stefanBoltzmann: 'Unit',
  wienDisplacement: 'Unit',
  molarMass: 'Unit',
  molarMassC12: 'Unit',
  gravity: 'Unit',
  planckLength: 'Unit',
  planckMass: 'Unit',
  planckTime: 'Unit',
  planckCharge: 'Unit',
  planckTemperature: 'Unit'
}

const embeddedDocs = {
  bignumber: 'Object',
  boolean: 'Object',
  complex: 'Object',
  createUnit: 'Object',
  fraction: 'Object',
  index: 'Object',
  matrix: 'Object',
  number: 'Object',
  sparse: 'Object',
  splitUnit: 'Object',
  string: 'Object',
  unit: 'Object',
  e: 'Object',
  E: 'Object',
  false: 'Object',
  i: 'Object',
  Infinity: 'Object',
  LN2: 'Object',
  LN10: 'Object',
  LOG2E: 'Object',
  LOG10E: 'Object',
  NaN: 'Object',
  null: 'Object',
  pi: 'Object',
  PI: 'Object',
  phi: 'Object',
  SQRT1_2: 'Object',
  SQRT2: 'Object',
  tau: 'Object',
  true: 'Object',
  version: 'Object',
  speedOfLight: 'Object',
  gravitationConstant: 'Object',
  planckConstant: 'Object',
  reducedPlanckConstant: 'Object',
  magneticConstant: 'Object',
  electricConstant: 'Object',
  vacuumImpedance: 'Object',
  coulomb: 'Object',
  elementaryCharge: 'Object',
  bohrMagneton: 'Object',
  conductanceQuantum: 'Object',
  inverseConductanceQuantum: 'Object',
  magneticFluxQuantum: 'Object',
  nuclearMagneton: 'Object',
  klitzing: 'Object',
  bohrRadius: 'Object',
  classicalElectronRadius: 'Object',
  electronMass: 'Object',
  fermiCoupling: 'Object',
  fineStructure: 'Object',
  hartreeEnergy: 'Object',
  protonMass: 'Object',
  deuteronMass: 'Object',
  neutronMass: 'Object',
  quantumOfCirculation: 'Object',
  rydberg: 'Object',
  thomsonCrossSection: 'Object',
  weakMixingAngle: 'Object',
  efimovFactor: 'Object',
  atomicMass: 'Object',
  avogadro: 'Object',
  boltzmann: 'Object',
  faraday: 'Object',
  firstRadiation: 'Object',
  loschmidt: 'Object',
  gasConstant: 'Object',
  molarPlanckConstant: 'Object',
  molarVolume: 'Object',
  sackurTetrode: 'Object',
  secondRadiation: 'Object',
  stefanBoltzmann: 'Object',
  wienDisplacement: 'Object',
  molarMass: 'Object',
  molarMassC12: 'Object',
  gravity: 'Object',
  planckLength: 'Object',
  planckMass: 'Object',
  planckTime: 'Object',
  planckCharge: 'Object',
  planckTemperature: 'Object',
  derivative: 'Object',
  lsolve: 'Object',
  lup: 'Object',
  lusolve: 'Object',
  simplify: 'Object',
  rationalize: 'Object',
  slu: 'Object',
  usolve: 'Object',
  qr: 'Object',
  abs: 'Object',
  add: 'Object',
  cbrt: 'Object',
  ceil: 'Object',
  cube: 'Object',
  divide: 'Object',
  dotDivide: 'Object',
  dotMultiply: 'Object',
  dotPow: 'Object',
  exp: 'Object',
  expm: 'Object',
  expm1: 'Object',
  fix: 'Object',
  floor: 'Object',
  gcd: 'Object',
  hypot: 'Object',
  lcm: 'Object',
  log: 'Object',
  log2: 'Object',
  log1p: 'Object',
  log10: 'Object',
  mod: 'Object',
  multiply: 'Object',
  norm: 'Object',
  nthRoot: 'Object',
  nthRoots: 'Object',
  pow: 'Object',
  round: 'Object',
  sign: 'Object',
  sqrt: 'Object',
  sqrtm: 'Object',
  square: 'Object',
  subtract: 'Object',
  unaryMinus: 'Object',
  unaryPlus: 'Object',
  xgcd: 'Object',
  bitAnd: 'Object',
  bitNot: 'Object',
  bitOr: 'Object',
  bitXor: 'Object',
  leftShift: 'Object',
  rightArithShift: 'Object',
  rightLogShift: 'Object',
  bellNumbers: 'Object',
  catalan: 'Object',
  composition: 'Object',
  stirlingS2: 'Object',
  config: 'Object',
  import: 'Object',
  typed: 'Object',
  arg: 'Object',
  conj: 'Object',
  re: 'Object',
  im: 'Object',
  evaluate: 'Object',
  help: 'Object',
  distance: 'Object',
  intersect: 'Object',
  and: 'Object',
  not: 'Object',
  or: 'Object',
  xor: 'Object',
  concat: 'Object',
  cross: 'Object',
  ctranspose: 'Object',
  det: 'Object',
  diag: 'Object',
  dot: 'Object',
  getMatrixDataType: 'Object',
  identity: 'Object',
  filter: 'Object',
  flatten: 'Object',
  forEach: 'Object',
  inv: 'Object',
  kron: 'Object',
  map: 'Object',
  ones: 'Object',
  partitionSelect: 'Object',
  range: 'Object',
  resize: 'Object',
  reshape: 'Object',
  size: 'Object',
  sort: 'Object',
  squeeze: 'Object',
  subset: 'Object',
  trace: 'Object',
  transpose: 'Object',
  zeros: 'Object',
  combinations: 'Object',
  factorial: 'Object',
  gamma: 'Object',
  kldivergence: 'Object',
  multinomial: 'Object',
  permutations: 'Object',
  pickRandom: 'Object',
  random: 'Object',
  randomInt: 'Object',
  compare: 'Object',
  compareNatural: 'Object',
  compareText: 'Object',
  deepEqual: 'Object',
  equal: 'Object',
  equalText: 'Object',
  larger: 'Object',
  largerEq: 'Object',
  smaller: 'Object',
  smallerEq: 'Object',
  unequal: 'Object',
  setCartesian: 'Object',
  setDifference: 'Object',
  setDistinct: 'Object',
  setIntersect: 'Object',
  setIsSubset: 'Object',
  setMultiplicity: 'Object',
  setPowerset: 'Object',
  setSize: 'Object',
  setSymDifference: 'Object',
  setUnion: 'Object',
  erf: 'Object',
  mad: 'Object',
  max: 'Object',
  mean: 'Object',
  median: 'Object',
  min: 'Object',
  mode: 'Object',
  prod: 'Object',
  quantileSeq: 'Object',
  std: 'Object',
  sum: 'Object',
  variance: 'Object',
  acos: 'Object',
  acosh: 'Object',
  acot: 'Object',
  acoth: 'Object',
  acsc: 'Object',
  acsch: 'Object',
  asec: 'Object',
  asech: 'Object',
  asin: 'Object',
  asinh: 'Object',
  atan: 'Object',
  atanh: 'Object',
  atan2: 'Object',
  cos: 'Object',
  cosh: 'Object',
  cot: 'Object',
  coth: 'Object',
  csc: 'Object',
  csch: 'Object',
  sec: 'Object',
  sech: 'Object',
  sin: 'Object',
  sinh: 'Object',
  tan: 'Object',
  tanh: 'Object',
  to: 'Object',
  clone: 'Object',
  format: 'Object',
  isNaN: 'Object',
  isInteger: 'Object',
  isNegative: 'Object',
  isNumeric: 'Object',
  isPositive: 'Object',
  isPrime: 'Object',
  isZero: 'Object',
  typeOf: 'Object'
}

exports.expectedInstanceStructure = {
  on: 'Function',
  off: 'Function',
  once: 'Function',
  emit: 'Function',
  ...allTypeChecks,
  ...allClasses,
  ...allNodeClasses,
  ...allInstanceFunctions,
  ...allInstanceConstants,
  ...allPhysicalConstants,
  ...allTypeChecks,
  ...allErrorClasses,
  docs: embeddedDocs,
  expression: {
    transform: {
      concat: 'Function',
      filter: 'Function',
      forEach: 'Function',
      index: 'Function',
      map: 'Function',
      max: 'Function',
      mean: 'Function',
      min: 'Function',
      range: 'Function',
      subset: 'Function'
    },
    mathWithTransform: {
      // note that we don't have classes here,
      // only functions and constants are allowed in the editor
      ...allFunctions,
      'var': 'Function',
      'typeof': 'Function',
      'eval': 'Function',
      ...allInstanceConstants,
      ...allPhysicalConstants
    },
    // deprecated stuff:
    docs: embeddedDocs,
    node: {
      ...allNodeClasses
    },
    parse: 'Function',
    Parser: 'Function'
  },
  // deprecated stuff:
  type: {
    ...allTypeChecks,
    ...allClasses
  },
  json: {
    reviver: 'Function'
  },
  error: {
    ...allErrorClasses
  }
}

exports.expectedES6Structure = {
  ...allES6Functions,
  ...allES6Constants,
  ...allPhysicalConstants,
  ...allES6Classes,
  ...allNodeClasses,
  ...allTypeChecks,
  ...allErrorClasses,
  docs: embeddedDocs
}
