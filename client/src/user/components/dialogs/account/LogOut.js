
import Card from "../../../../shared/UIElements/Card";

const LogOut = () => {
  return (
    <>
      <Card className="warning-card">
        <div className="warning">
          <div className="warning__content">
          You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account. 
          </div>
        </div>
    </Card>
    </>
  );
};

export default LogOut;
