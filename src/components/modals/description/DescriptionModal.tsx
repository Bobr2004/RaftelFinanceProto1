import { useTranslation } from "react-i18next";
import { ModalTemplate } from "../ModalTemplate";

function DescriptionModal({data}: any) {
   console.log(data)
   const { t } = useTranslation();

   return (
      <ModalTemplate title={t("description.descriptionTitle")}>
         <div className="flex justify-center mb-4">
            <p className="max-w-[40ch]">{data}</p>
         </div>
      </ModalTemplate>
   );
}

export { DescriptionModal };
