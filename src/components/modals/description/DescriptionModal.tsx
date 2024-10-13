import { useTranslation } from "react-i18next";
import { ModalTemplate } from "../ModalTemplate";

function DescriptionModal() {
   const { t } = useTranslation();
   const description = `Заробітна плата в магазині мобільних аксесуарів MobDevice
                     складається з фіксованої ставки та процентів від продажів.
                     Базова ставка становить 350 грн за день. Крім того,
                     працівник отримує 6% від вартості проданих товарів та 50%
                     від вартості наданих послуг. Середня місячна заробітна
                     плата в MobDevice становить приблизно 19 000 грн.`;

   return (
      <ModalTemplate title={t("description.descriptionTitle")}>
         <span>{description}</span>
      </ModalTemplate>
   );
}

export { DescriptionModal };
