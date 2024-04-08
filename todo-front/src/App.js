import React from "react";
//import axios from "axios";

function App() {
	const [data, setData] = React.useState();
	const url = "http://127.0.0.1:8000";
  //fetch()関数を使用してGETリクエストを送信し、その後のPromiseチェーンでレスポンスの処理を行う。
  const GetData = () => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        //エラーが発生した場合
        console.error('There was a problem with the fetch operation:', error);
      });
  };

	return (
		<div>
			<div>ここに処理を書いていきます</div>
			{data ? <div>{data.Hello}</div> : <button onClick={GetData}>データを取得</button>}
		</div>
	);
}

export default App;