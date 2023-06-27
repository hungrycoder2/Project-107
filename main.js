function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/C_i6H1gwg/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}