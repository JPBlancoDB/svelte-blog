import { render } from "@testing-library/svelte";
import Index from "./index.svelte";

describe("index component", () => {
  test("should render component correctly", () => {
    const { container } = render(Index, {
      props: {
        articles: []
      }
    });
    expect(container).toContainHTML("<div></div>");
  });

  test("should render articles", () => {
    const title = "My title";
    const description = "some description";
    const readable_publish_date = "10 Oct";
    const canonical_url = "url";
    const { container, getByText } = render(Index, {
      props: {
        articles: [
          {
            title,
            canonical_url,
            readable_publish_date,
            description,
            tag_list: []
          }
        ]
      }
    });

    expect(container.querySelector("a").href).toBe(
      `http://localhost/${canonical_url}`
    );
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(readable_publish_date)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();
  });

  test("should render articles with tags", () => {
    const { getByText } = render(Index, {
      props: {
        articles: [
          {
            tag_list: ["my-tag"]
          }
        ]
      }
    });

    expect(getByText("#my-tag")).toBeInTheDocument();
  });
});
