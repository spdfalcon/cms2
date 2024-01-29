import { useTranslation } from "react-i18next";
export default function Inbox() {
  const {t} = useTranslation()
  return (
    <>
    <h1>{t('dashboard')}</h1>
    </>
  );
}
