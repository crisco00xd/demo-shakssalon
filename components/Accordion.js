import { CaretUp } from "phosphor-react";

function Accordion(props) {
  return (
    <div className="price-list__container accordion__section">
      <h3 className="price-list__section-title accordion">
        {props.sectionTitle}
        <CaretUp size={21} />
      </h3>
      <div className="price-list__content accordion__content">
        <h3 className="price-list__title accordion__subtitle ">
          {props.title}
        </h3>
        <table
          className="price-list__table accordion__table"
          dangerouslySetInnerHTML={{ __html: props.content }}
        >
          <tbody>
            {tableData.map((tableData, index) => (
              <>
                <tr key={index}>
                  {tableData.map((item, index) => (
                    <td key={index}>{item}</td>
                  ))}
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Accordion;
