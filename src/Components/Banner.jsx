import navi_honda from "../assets/img/navi_honda.jpg";

function Banner() {
  return (
    <div style={styles.bannerContainer}>
      <img src={navi_honda} alt="Navi Honda" style={styles.image} />
    </div>
  );
}

const styles = {
  bannerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "500px", 
    backgroundColor: "#f0f0f0", 
    marginBottom: "20px", 
    marginTop: "60px", 
  },
  image: {
    maxWidth: "100%", 
    maxHeight: "100%",
  },
};

export default Banner;
