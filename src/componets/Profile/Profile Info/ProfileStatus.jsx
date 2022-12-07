import React, { useEffect, useState } from "react";
import "./ProfileInfo.css";

export default React.memo(function ProfileStatus(props) {
 
  const [status, setStatus] = React.useState(props.status);
  const [changeStatus, setСhangeStatus] = useState(false);
  useEffect(() => {
    setStatus(props.status)
  }, [props.status]);

  const updateStatus = (e) => {
    setStatus(e.target.value);
  }

  const onСhangeStatus = () => {
    setСhangeStatus(true)
  }
  const x = React.useMemo(() => {
    return !props.statusError
  }, [props.statusError]);


  function exitOfStatus() {
    props.postProfileStatus(status);
    if (!props.statusError) setСhangeStatus(false)
  }


  useEffect(() => {
    setСhangeStatus(props.statusError);
  }, [props.statusError]);


  return (
    <>
      {props.statusError && <div>Max Status length is 300 symbols</div>}
      {changeStatus ? (
        <InputSatus
          updateStatus={updateStatus}
          defaultValue={status}
          exitOfStatus={exitOfStatus}
        />
      ) : (
        <div>
          <h4 onDoubleClick={onСhangeStatus}>
            {status || <div>Статус отсутсвует</div>}
          </h4>
        </div>
      )}
    </>
  );
})

const InputSatus = (props) => {
  return (
    <div>
      <input
        className="int"
        id="status"
        type="text"
        name="text"
        onChange={props.updateStatus}
        onBlur={props.exitOfStatus}
        defaultValue={props.defaultValue}
      />
    </div>
  );
};
