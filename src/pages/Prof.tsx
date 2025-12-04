import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PageProf() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <aside
          style={{
            width: "200px",
            backgroundColor: "#e15b5b",
            padding: "20px",
            color: "black",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            fontSize: "18px",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>OpenSchool</Link>
          <Link to="/Parent" style={{ textDecoration: "none", color: "black" }}>Parents</Link>
          <Link to="/Prof" style={{ textDecoration: "none", color: "black" }}>Professeurs</Link>
          <Link to="/Eleve" style={{ textDecoration: "none", color: "black" }}>Élèves</Link>
        </aside>

        {/* Main content */}
        <main style={{ flex: 1, overflow: "auto" }}>

          {/* Bloc texte */}
          <section
            style={{
              padding: "40px",
              background: "linear-gradient(135deg, #e6e6e6 60%, #e15b5b 40%)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p style={{ maxWidth: "600px", fontSize: "20px", margin: 0 }}>
              L'accès à la connaissance ne devrait jamais être conditionné par un abonnement.
              En adoptant les GAFAM, l'école accepte une <strong>dette technologique</strong> à long terme,
              liant l'avenir de l'éducation aux décisions d'un PDG.
            </p>
          </section>

          {/* Illustration pleine largeur */}
          <section
            style={{ backgroundColor: "#e6e6e6", padding: "0", margin: "0" }}
          >
            <div
              style={{
                width: "100%",
                height: "500px",
                borderTop: "6px solid #e15b5b",
                borderBottom: "6px solid #e15b5b",
                overflow: "hidden",
              }}
            >
              <img
                src="/src/assets/school.jpg"
                alt="illustration"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </section>

          {/* Technologies open source */}
          <section style={{ padding: "40px", backgroundColor: "#f4f4f4" }}>
            <h2 style={{ marginBottom: "20px", fontSize: "28px" }}>
              Technologies scolaires open‑source utiles
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(250px, 1fr))",
                gap: "20px",
              }}
            >
              {/* Moodle */}
              <div
                style={{
                  backgroundColor: "#e15b5b",
                  padding: "20px",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  textAlign: "center",
                }}
              >
                <img src="/src/assets/moodle.png" alt="Moodle" style={{ width: "80px", marginBottom: "10px" }} />
                <h3>Moodle</h3>
                <p>Une plateforme d'apprentissage en ligne complète permettant aux enseignants de créer des cours et activités.</p>
              </div>

              {/* Nextcloud */}
              <div
                style={{
                  backgroundColor: "#e15b5b",
                  padding: "20px",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  textAlign: "center",
                }}
              >
                <img src="/src/assets/nextcloud.png" alt="Nextcloud" style={{ width: "80px", marginBottom: "10px" }} />
                <h3>Nextcloud</h3>
                <p>Stockage, partage de fichiers et collaboration sans dépendre des géants du cloud.</p>
              </div>

              {/* LibreOffice */}
              <div
                style={{
                  backgroundColor: "#e15b5b",
                  padding: "20px",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  textAlign: "center",
                }}
              >
                <img src="/src/assets/libreoffice.png" alt="LibreOffice" style={{ width: "80px", marginBottom: "10px" }} />
                <h3>LibreOffice</h3>
                <p>Une suite bureautique puissante et gratuite, alternative complète aux outils propriétaires.</p>
              </div>

              {/* BigBlueButton */}
              <div
                style={{
                  backgroundColor: "#e15b5b",
                  padding: "20px",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  textAlign: "center",
                }}
              >
                <img src="/src/assets/bbb.png" alt="BigBlueButton" style={{ width: "80px", marginBottom: "10px" }} />
                <h3>BigBlueButton</h3>
                <p>Une solution de visioconférence conçue spécialement pour l'enseignement à distance.</p>
              </div>
            </div>
          </section>

{/* Bouton formulaire */}
<div style={{ display: "flex", justifyContent: "center", margin: "40px 0" }}>
  <Link
    to="/formulaire"
    style={{
      backgroundColor: "#e15b5b",
      color: "white",
      padding: "20px 40px",
      borderRadius: "12px",
      fontSize: "22px",
      textDecoration: "none",
      fontWeight: "bold",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    }}
  >
    Cliquez ici si vous voulez répondre à un formulaire
  </Link>
</div>

</main>
      </div>

      <Footer />
    </div>
  );
}
