// imageClassification.js

import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

// Load MobileNet model
export async function loadModel() {
    const model = await mobilenet.load();
    return model;
}

// Perform image classification with MobileNet
export async function classifyImage(imageElement, model) {
    // Convert image to tensor
    const tensor = tf.browser.fromPixels(imageElement)
        .resizeNearestNeighbor([224, 224]) // Resize image to fit MobileNet input size
        .toFloat()
        .expandDims();

    // Classify image
    const predictions = await model.classify(tensor);

    // Return predictions
    return predictions;
}

// Example usage (optional)
export async function runExample() {
    const model = await loadModel();
    const imageElement = document.getElementById('image');
    const predictions = await classifyImage(imageElement, model);
    console.log(predictions);
}
