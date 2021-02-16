import { Modal } from '../_components';

export const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps
}) => (
  <g>
    <circle r={15}></circle>
    <foreignObject {...foreignObjectProps}>
      <div>        
        <h6 className="h6" onClick={toggleNode}>{nodeDatum.name}</h6>
        {nodeDatum.children && (
          <button  className="btn btn-info btn-sm {}">
            {nodeDatum.__rd3t.collapsed ? "Less Info" : "More info"}
          </button>
        )}
      </div>
    </foreignObject>
  </g>
);

