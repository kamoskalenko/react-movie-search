import { Formik, Form, Field } from "formik";
import s from "./FilterBar.module.css";

const FilterBar = ({ handleChangeQuery }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values) => {
    handleChangeQuery(values.query);
  };

  return (
    <div className={s.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="query" className={s.input} />
          <button type="submit" className={s.button}>
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FilterBar;
