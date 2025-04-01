import "./App.css"

export default function App(){
  return(
<div>
        <header className="MainTitle" id="top"><h1>자기소개서</h1></header>

        <nav className="keyword">
            <ul>
                <b>
                <li><a href="#MyName">이게 나야</a></li>
                <li><a href="#hobby">취미</a></li>
                <li><a href="#contact">연락처</a></li>
                </b>
            </ul>
        </nav>
        <main id="main">
        <div id="MyName" className="contents">
            <h2>Who am I?</h2>
            안녕하세요. 저의 이름은 정목진 입니다.<br/>
            저의 MBTI는 ENTJ로 활발한 성격을 가지고 있습니다!<br/>
            22학번으로 소프트웨어학과 2학년 재학 중입니다.<br/>
            현재 수유에서 혼자 자취하는 중이며 자취하고 잘취하는 남자가 컨셉입니다.<br/>
            ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ<br/>
            잘부탁드립니다~<br/>
            <img src="../media/안녕.png"/>
        </div>
        <div id="hobby" className="contents">
            <h2>취미</h2>
            <ul>
                <li>게임</li>
                <img src="../media/롤 다이아.jpeg"/>
                <li>풋살</li>
                <img src="../media/풋살.jpeg"/>
                <li>야구 보기</li>
                <img src="../media/lg twins.png"/>
            </ul>
        </div>
        <div id="contact" className="contents">
            <h2>연락처</h2>
            <ul>
                <li>번호: 010-4954-6336</li>
                <li>이메일: <a href="mailto:2022301072@skuniv.ac.kr">2022301072@skuniv.ac.kr</a></li>
            </ul>
        </div>
        </main>
        <footer className="footer">
        <b><a href="#top">맨 위로</a></b>
        </footer>
</div>
);}