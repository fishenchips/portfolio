import Link from "next/link";

const KrukanPage = () => {
  return (
    <div>
      <div>
        <h3>FC Krukan App</h3>
      </div>
      <div>
        links
        <Link href={"/https://krukan2-0.vercel.app/"} target="_blank">
          To website
        </Link>
        <Link
          href={"https://github.com/fishenchips/Krukan2.0/"}
          target="_blank"
        >
          GitHub repo
        </Link>
      </div>
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
      <p>welcom</p>
    </div>
  );
};

export default KrukanPage;
