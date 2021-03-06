export const renderForeignObjectNode = ({ nodeDatum, toggleNode, foreignObjectProps, handleNodeClick }) => {
  return (
    <g>
      <circle r={15} onClick={toggleNode}></circle>
      <foreignObject {...foreignObjectProps}>
        <div className="d-flex align-items-center">
          <h6 className="h6 mb-0" onClick={toggleNode}>{nodeDatum.name}</h6>
          {nodeDatum.children && (
            <button type="button" className="btn btn-outline-primary h2 btn-sm ml-2 mt-1 mb-0" onClick={() => handleNodeClick(nodeDatum)} >?</button>
          )}
        </div>
      </foreignObject>
    </g>
  );
}