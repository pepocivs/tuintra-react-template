import React from "react";
import styled from "styled-components";

/* Helpers */
import clubInfoDomain from "helpers/clubInfo";

/* Custom components */
import Title from "components/UI/Title/Title";

function LegalAdvice({clubInfo}) {
  const Container = styled.div`
    text-align: justify;
  `;
  const data = (((clubInfo || {}).data || {}).clubInfo || {});
  console.log(data);
  return (
    <Container>
      <Title shadow="Aviso Legal">Aviso Legal</Title>
      <p>{data.clubName}, provisto con CIF {data.contact.fiscalNumber}, dirección {data.contact.address} - {data.contact.postalCode} de {data.contact.city}, no puede asumir ninguna responsabilidad derivada del uso incorrecto, inapropiado o ilícito de la información aparecida en la página de Internet de {clubInfoDomain.tuintraDomain}</p>
      <p>Con los límites establecidos en la ley, {data.clubName} no asume ninguna responsabilidad derivada de la falta de veracidad, integridad, actualización y precisión de los datos o informaciones que se contienen en sus páginas de Internet.</p>
      <p>Los contenidos e información no vinculan a {data.clubName} ni constituyen opiniones, consejos o asesoramiento legal de ningún tipo pues se trata meramente de un servicio ofrecido con carácter informativo y divulgativo.</p>
      <p>La página de Internet de {data.clubName} puede contener enlaces (links) a otras páginas de terceras partes que {data.clubName} no puede controlar. Por lo tanto, {data.clubName} no puede asumir responsabilidades por el contenido que pueda aparecer en páginas de terceros.</p>
      <p>Los textos, imágenes, sonidos, animaciones, software y el resto de contenidos incluidos en este website son propiedad exclusiva de {data.clubName} o sus licenciantes. Cualquier acto de transmisión, distribución, cesión, reproducción, almacenamiento o comunicación pública total o parcial, debe contar con el consentimiento expreso de {data.clubName}</p>
      <p>Asimismo, para acceder a algunos de los servicios que {data.clubName} ofrece a través del website deberá proporcionar algunos datos de carácter personal. En cumplimiento de lo establecido en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos le informamos que, mediante la cumplimentación de los presentes formularios, sus datos personales quedarán incorporados y serán tratados en los ficheros de {data.clubName} con el fin de poderle prestar y ofrecer nuestros servicios así como para informarle de las mejoras del sitio Web. Asimismo, le informamos de la posibilidad de que ejerza los derechos de acceso, rectificación, cancelación y oposición de sus datos de carácter personal, manera gratuita mediante email a {data.contact.email} o en la dirección {data.contact.address} - {data.contact.postalCode} de {data.contact.city}</p>
    </Container>
  )
}

export default LegalAdvice;