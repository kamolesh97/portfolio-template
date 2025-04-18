import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaWhatsapp, FaYoutube } from 'react-icons/fa';

import { APPS, CONTACTS } from '@/common/constants';

export const ICONS = {
  [APPS.YOUTUBE]: FaYoutube,
  [APPS.GITHUB]: FaGithub,
  [APPS.LINKEDIN]: FaLinkedin,
  [CONTACTS.EMAIL]: FaEnvelope,
  [CONTACTS.PHONE]: FaPhone,
  [CONTACTS.WHATSAPP]: FaWhatsapp,
};
