import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Button} from "react-native";
import JSONTree from 'react-native-json-tree';
import { 
  howToStart,
  objectCopy,
  objectFusion,
  objectFusionAddOrUpdate,
  objectExtract,
  arrayCopy,
  arrayFusion,
  arrayExtract,
  arrowFunctionExplicit,
  arrowFunctionUnplicit,
  ArrayMap,
  AsyncSuccess,
  AsyncReject
} from './functions';


const questions = [
  /*
  {title: "",    execute:        , param1: undefined              , param2: undefined,        answer: undefined  }
  */
  {title: "howToStart", execute: howToStart, param1: 1, param2: 2, answer: 3},
  {title: "objectCopy", execute: objectCopy, param1: {text: "hello world"}, answer: {text: "hello world"}},
  {title: "objectFusion", execute: objectFusion, param1: {textEN: "hello world"}, param2: {textFR: "bonjour tout le monde"}, answer: {textEN: "hello world", textFR: "bonjour tout le monde"}},
  {title: "objectFusionAddOrUpdate - add", execute: objectFusionAddOrUpdate, param1: {lang: "fr"}, param2: "bonjour tout le monde", answer: {lang: "fr", value: "bonjour tout le monde"}},
  {title: "objectFusionAddOrUpdate - update", execute: objectFusionAddOrUpdate, param1: {lang: "fr", value: 2}, param2: "bonjour tout le monde", answer: {lang: "fr", value: "bonjour tout le monde"}},
  {title: "objectExtract", execute: objectExtract, param1: {value: 42}, answer: 42},
  {title: "arrayCopy", execute: arrayCopy, param1: [2], answer: [2]},
  {title: "arrayFusion", execute: arrayFusion, param1: [1, 2], param2: [3], answer: [1, 2, 3]},
  {title: "arrayExtract", execute: arrayExtract, param1: [1, 2], answer: 2},
  {title: "arrowFunctionExplicit", execute: arrowFunctionExplicit, param1: true, answer: "success"},
  {title: "arrowFunctionUnplicit", execute: arrowFunctionUnplicit, param1: true, answer: "success"},
  {title: "ArrayMap", execute: ArrayMap, param1: [1, 2, 3], answer: [2, 3, 4]},
  {title: "AsyncSuccess", execute: AsyncSuccess, answer: "success"},
  {title: "AsyncReject", execute: AsyncReject, answer: "failed"},
]


const Question = (props) => {
  const {title, children, execute, answer, param1, param2} = props;
  const [res, setRes] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const _handleExecute = async () => {
    try {
      let _res = await execute(param1, param2);
      if ((typeof(answer) === "object" && JSON.stringify(_res) === JSON.stringify(answer)) || (_res === answer) ) {
        console.log(`success: ${title} `)
        setIsCorrect(true);
      } else {
        console.log(`${title} failed, get ${typeof(_res ) === "object" ? JSON.stringify(_res) : _res} instead of ${typeof(answer ) === "object" ? JSON.stringify(answer) : answer}`);
        setIsCorrect(false);
      }
      setRes(_res);
    } catch (e) {
      setIsCorrect(false);
      setRes(e);
      console.log(`${title} crashed, error: ${e.message}`);
    }
  }

  return (
    <View>
      <Button title={title} onPress={_handleExecute} />
      {res ? <JSONTree data={res} /> : null}
      {res && children ? <Text>{children}</Text> : null}
      {isCorrect === true ? <Text style={{color: "green", textAlign: "center", fontSize: 22}}>Réussi</Text>
      : isCorrect === false ? <Text style={{color: "red", textAlign: "center", fontSize: 22}}>Echoué</Text> : null}
    </View>
  )
}

const Es6 = () => {
  return (
    <ScrollView>
      {questions.map(i => (
        <Question key={i.title} {...i} />
      ))}
    </ScrollView>
  );
}

export default Es6;