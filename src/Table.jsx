import PropTypes from "prop-types";

function Table({ data, schema }) {
  return (
    <table border="1px">
      <thead>
        <tr>
          {Object.keys(schema).map((key) => (
            <th key={`tableHeaderCell${key}`}>{schema[key].label}</th>
          ))}
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, ind) => (
          <tr key={`tableBodyRow${ind}`}>
            {Object.keys(schema).map((key) => (
              <td style={{ padding: 8 }} key={`tableBodyRowCell${row}${key}`}>
                {row[key]}
              </td>
            ))}
            <td>
              <button style={{ margin: 8 }}>Update</button>
            </td>
            <td>
              <button style={{ margin: 8 }}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  schema: PropTypes.objectOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Table;
