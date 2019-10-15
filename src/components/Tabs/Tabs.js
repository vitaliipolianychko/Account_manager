import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Tabs.module.css';

class Tabs extends React.Component {
    constructor(props) {
      super();
      this.state = {
        active: 0
      };
      console.log(props);
    }
    
    select = (i) => {
      const _this = this;
      return function() {
        _this.setState({
          active: i
        });
      };
    }
    
    renderTabs = () => {
      return React.Children.map(this.props.children, (item, i) => {
        if (i%2 === 0) {
          return <Link onClick={this.select(i)} className={styles.tab}>{item}</Link>;
        }
      });
    }
    
    renderContent() {
      return React.Children.map(this.props.children, (item, i) => {
        if (i-1 === this.state.active) {
          return <div className={styles.content}>{item}</div>;
        }         
      });
    }
    
    render() {
      return (
        <div className={styles.result}>
          <div className={styles.tabs}>
            {this.renderTabs()}
          </div>
          {this.renderContent()}
        </div>
      );
    }
  }
  
  export default Tabs;