import React from 'react';
import Header from './componets/Header';
import Main from './componets/Main';
import Features from './componets/Features';
import Contact from './componets/Contact';
import Footer from './componets/Footer';
import '../src/css/style.css';

class App extends React.Component {
  state = {
    elementProps: {
      names: [
        'Первое', 'Второе', 'Третье', 'Четвертое'
      ]
    }
  }

  render() {
    return (
      <>
      <Header />
      <Main />
      <Features { ...this.state.elementProps}/>
      <Contact />
      <Footer />
      </>
    )
  }
}

export default App;
