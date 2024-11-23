import { GetAllImageDetails } from "../actions/image";
import Dash from "./Dash";

export default async function page() {
  const images = await GetAllImageDetails();
  return <Dash images={images} />;
}
