import { IAfterBefore } from "@/types/article";
import AfterBeforeCard from "../after-before-card";

const AfterBefore = ({
  afterBefore,
  isFeatured,
}: {
  afterBefore: IAfterBefore[];
  isFeatured?: boolean;
}) => {
  return (
    <>
      <section className="w-full mb-[50px]">
        <div className="container mx-auto">
          {afterBefore
            .filter((media) =>
              isFeatured ? media.isFeatured === isFeatured : true,
            )
            .map((item) => (
              <AfterBeforeCard key={item.id} item={item} />
            ))}
        </div>
      </section>
    </>
  );
};

export default AfterBefore;
