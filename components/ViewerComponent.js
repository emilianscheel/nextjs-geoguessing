import { Viewer, ViewerOptions } from 'mapillary-js';

export default class ViewerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    this.viewer = new Viewer({
      accessToken: this.props.accessToken,
      container: this.containerRef.current,
      imageId: this.props.imageId,
    });
  }

  componentWillUnmount() {
    if (this.viewer) {
      this.viewer.remove();
    }
  }

  render() {
    return <div ref={this.containerRef} style={this.props.style} />;
  }
}