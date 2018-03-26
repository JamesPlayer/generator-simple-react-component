import { connect } from 'react-redux';
import MyComponent from './MyComponent';

const mapStateToProps = (state, ownProps) => ({
  value: state.someValue,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (value) => { dispatch(yourAction(value)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
