import PoliciesSection from "@/components/politiques/PoliciesSection";
import Card from "@/components/general/Card";

export default function Politiques() {
  return (
    <>
      <PoliciesSection>
        <h3 className="font-finalsix text-[40px] font-extrabold text-center">
          MENTIONS LÉGALES
        </h3>
        <Card>
          <h4 className="text-2xl font-bold pb-4">MENTIONS LÉGALES</h4>
          <p className="pb-3">
            Ce site est édité par Kazi Conseils inc., enregistrée au Québec sous
            le NEQ : [NEQ].
          </p>
          <p className="pb-3">Siège social : [adresse complète].</p>
          <p className="pb-3">Courriel : [adresse courriel].</p>
        </Card>
        <Card>
          <h4 className="text-2xl font-bold pb-4">
            POLITIQUE DE CONFIDENTIALITÉ
          </h4>
          <p className="pb-3">
            Conformément à la Loi 25 sur la protection des renseignements
            personnels, Kazi <br className="lg:block hidden" />
            Conseils collecte uniquement les données nécessaires au bon
            fonctionnement de <br className="lg:block hidden" />
            ses services.
          </p>
          <p className="pb-3">
            Les utilisateurs disposent d&apos;un droit d&apos;accès, de
            rectification et de suppression de{" "}
            <br className="lg:block hidden" />
            leurs données personnelles en nous contactant à : [email].
          </p>
          <p className="pb-3">
            La personne responsable de la protection des renseignements
            personnels chez Kazi <br className="lg:block hidden" />
            Conseils est : [Nom et titre].{" "}
          </p>
          <p className="pb-3">
            Aucune donnée n&apos;est vendue ni partagée sans consentement
            explicite. Pour toute <br className="lg:block hidden" />
            question relative au traitement de vos données, veuillez nous écrire
            à [email].
          </p>
        </Card>
        <Card>
          <h4 className="text-2xl font-bold pb-4">
            CONDITIONS D&apos;UTILISATION
          </h4>
          <p className="pb-3">
            En utilisant ce site, vous acceptez de ne pas l&apos;employer à des
            fins illégales ou <br className="lg:block hidden" />
            nuisibles. Kazi Conseils décline toute responsabilité en cas
            d&apos;interruption, d&apos;erreurs ou{" "}
            <br className="lg:block hidden" />
            de dommages liés à l&apos;utilisation du site.
          </p>
          <p className="pb-3">
            Nous nous réservons le droit de modifier ces conditions à tout
            moment sans préavis.
          </p>
          <p className="pb-3">
            L&apos;utilisation du contenu de ce site, incluant la reproduction,
            modification ou <br className="lg:block hidden" />
            distribution, requiert une autorisation écrite préalable.
          </p>
        </Card>
        <Card>
          <h4 className="text-2xl font-bold pb-4">PROPRIÉTÉ INTELLECTUELLE</h4>
          <p className="pb-3">
            L&apos;ensemble du contenu de ce site (textes, images, logos,
            éléments graphiques, code, <br className="lg:block hidden" />
            etc.) est protégé par les lois sur la propriété intellectuelle.
          </p>
          <p className="pb-3">
            Toute reproduction ou utilisation non autorisée constitue une
            violation pouvant <br className="lg:block hidden" />
            entraîner des sanctions civiles et pénales.
          </p>
        </Card>
      </PoliciesSection>
    </>
  );
}
