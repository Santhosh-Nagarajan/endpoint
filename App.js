// App.js

import React, { useEffect, useState } from ‘react’;

import { View, Text } from ‘react-native’;

import axios from ‘axios’;

const App = () => {

  const [data, setData] = useState(”);

  useEffect(() => {

    fetchData();

  }, []);

  const fetchData = async () => {

    try {

      const response = await axios.get(‘http://localhost:5000/api/data’);

      setData(response.data.message);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <View>

      <Text>{data}</Text>

    </View>

  );

};

export default App;
