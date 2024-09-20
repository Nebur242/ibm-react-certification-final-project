import { useDispatch, useSelector } from "react-redux";
import Card from "../components/card";
import CardSkeleton from "../components/card-skeleton";
import Page from "../components/page";
import { useGetPlantsQuery } from "../store/features/plants";
import { addItem } from "../store/features/cart";

const Products = () => {
  const { isLoading, data: groups = [], error } = useGetPlantsQuery();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  return (
    <Page>
      <div className="py-4 bg-gray-200 min-h-screen">
        <div className="container p-4 md:p-0 mx-auto">
          {isLoading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10">
              {[...Array(9).keys()].map((_, index) => (
                <CardSkeleton key={index} />
              ))}
            </div>
          )}

          {groups &&
            groups.map((group) => (
              <div key={group.name}>
                <h2 className="text-center md:text-4xl text-2xl font-bold md:my-10 my-5">
                  {group.name}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10">
                  {group.plants.map((plant) => (
                    <Card
                      key={plant.id}
                      plant={plant}
                      buttonDisabled={items.some(
                        (i) => i.plant.id === plant.id
                      )}
                      onButtonClick={() => dispatch(addItem(plant))}
                    />
                  ))}
                </div>
              </div>
            ))}

          {error && (
            <div
              className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50  dark:text-red-400 dark:border-red-800"
              role="alert"
            >
              <svg
                className="flex-shrink-0 inline w-4 h-4 me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">Error alert!</span> Something went
                wrong
              </div>
            </div>
          )}
        </div>
      </div>
    </Page>
  );
};

export default Products;
