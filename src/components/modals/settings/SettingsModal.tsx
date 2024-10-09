import { Col } from "../../positional/Cols";
import { Row, Row23 } from "../../positional/Rows";
import { Button } from "../../ui/Button";
import { Divider } from "../../ui/Divider";
import { ModalTemplate } from "../ModalTemplate";
import { FontSizeSetting } from "./FontSizeSetting";

function SettingsModal() {
   return (
      <ModalTemplate title="Settings">
         <Col>
            <Row23 className="items-center">
               <span>Візуальна тема</span>
               <Row className="flex-wrap">
                  <Button>Світла</Button>
                  <Button className="C-focusSpecialBox">Темна</Button>
               </Row>
            </Row23>
            <Divider />
            <FontSizeSetting />
            <Divider />
            <Row23 className="items-center">
               <span>Вибір мови</span>
               <Row className="flex-wrap">
                  <Button>English</Button>
                  <Button className="C-focusSpecialBox">Українська</Button>
               </Row>
            </Row23>
            <Divider />
            <Row23 className="items-center">
               <span>Вибір валюти</span>
               <Row className="flex-wrap">
                  <Button className="C-focusSpecialBox">UAH ₴</Button>
                  <Button>$ USD </Button>
                  <Button>BIT ₿</Button>
                  <Button>+</Button>
               </Row>
            </Row23>
         </Col>
      </ModalTemplate>
   );
}

export { SettingsModal };
