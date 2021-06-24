import Component from "flarum/common/Component";
import Link from "flarum/components/Link";

export default class BlockListView extends Component {
  view() {
    if (!this.attrs.badges) {
      return null;
    }

    const badges = this.attrs.badges;

    return (
      <ul className={"BadgeCategoryList"}>
        {badges.map((badge) => {
          return (
            <li>
              <Link
                href={app.route("badges.item", { id: badge.id() })}
                className={"BadgeContainer"}
              >
                <div className={"BadgeContainerInfo"}>
                  <span className="UserBadge">
                    <i className={badge.icon()} /> {badge.name()}
                  </span>

                  <p className={"BadgeDescription"}>{badge.description()}</p>

                  <p>
                    {app.translator.trans(
                      "v17development-flarum-badges.forum.badge.earned_count",
                      {
                        count: badge.earnedAmount(),
                      }
                    )}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
