import { Comment, Content } from "./style";

export function Comments() {
  return (
    <Comment>
      <Content>
        <div className="content-top">
          <div className="titles">
            <h1>Prático, fácil, moderno</h1>
            <h2>Você resolve tudo sem estresse</h2>
          </div>
          <div className="vetor"></div>
        </div>

        <div className="comments">
          <div className="comment">
            <div className="comment-header">
              <span>@marciogurka</span>
              <img src="" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              tempore repellat consectetur
            </p>
          </div>
          <div className="comment">
            <div className="comment-header">
              <span>@marciogurka</span>
              <img src="" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              tempore repellat consectetur
            </p>
          </div>
          <div className="comment">
            <div className="comment-header">
              <span>@marciogurka</span>
              <img src="" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              tempore repellat consectetur
            </p>
          </div>
        </div>
      </Content>
    </Comment>
  );
}
