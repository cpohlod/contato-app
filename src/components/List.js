import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";

const List = () => {
  const mData = useSelector(({ contact: { data } }) => data);

  return (
    <div>
      <div>
        <div>Contatos</div>
        {
        mData.length===0 ? (
                              <div data-test="sem-contatos">Empty State</div>
                            ) 
                            : 
                            (
                              <div data-test={"total-"+mData.length}>{mData.length}</div> 
                            )
        }
        
      </div>
      <ul>
        {mData.map((i, idx) => (
          <Item idx={idx} key={idx} contact={i} />
        ))}
      </ul>
    </div>
  );
};

export default List;

// import React from "react";
// import Item from "./Item";
// import { connect} from "react-redux";

// const List = ({ mData }) => {
//   return (
//     <ul>
//       {mData.map((i, idx) => (
//         <Item idx={idx} key={idx} contact={i} />
//       ))}
//     </ul>
//   );
// };

// const mapStateProps = state => {
//   return { mData: state.data };
// };

// export default connect(mapStateProps)(List);
