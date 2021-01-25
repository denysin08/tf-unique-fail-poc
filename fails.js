const tf = require('@tensorflow/tfjs-node')

const a = tf.tensor1d([1, 1, 2, 4, 4, 4, 7, 8, 8]);
const {values, indices} = tf.unique(a);

