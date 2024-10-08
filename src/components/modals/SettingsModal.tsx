import { Col } from "../positional/Cols";
import { Row, Row23 } from "../positional/Rows";
import { Button } from "../ui/Button";
import { ContentBox } from "../ui/ContentBox";

function SettingsModal() {
   return (
      <div className="C-textBase absoluteCenter p-6 z-30 w-full max-w-[600px]">
         <ContentBox className="w-full">
            <Col>
               <h1>Settings</h1>
               <Row23 className="items-center">
                  <span>Візуальна тема</span>
                  <Row className="flex-wrap">
                     <Button>Світла</Button>
                     <Button>Темна</Button>
                  </Row>
               </Row23>
               <Row23 className="items-center">
                  <span>Розмір Шрифту</span>
                  <Row className="flex-wrap">
                     <Button className="text-[14px]">14px</Button>
                     <Button className="text-[16px]">16px</Button>
                     <Button className="text-[18px]">18px</Button>
                  </Row>
               </Row23>
            </Col>
         </ContentBox>
      </div>
   );
}

export { SettingsModal };
