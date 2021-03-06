import cn from "classnames";
import styles from "./footer.module.css";
import {
	COPYRIGHT_HOLDER,
	SITE_NAME,
	CODE_OF_CONDUCT,
	LEGAL_URL,
	REPO,
} from "@lib/constants";

export function HostedByVercel() {
	return (
		<a
			href="https://vercel.com"
			className={cn(styles["footer-link"], styles["footer-logo"])}
			target="_blank"
			rel="noopener noreferrer"
		>
			<div className={styles["secondary-text"]}>Created by</div>
			<img src="../components/icons/yeoshin_logo.png" />
		</a>
	);
}

export default function Footer() {
	return (
		<footer className={cn(styles.footer)}>
			<div className={styles["footer-legal"]}>
				<div className={styles["footer-hostedby"]}>
					<div className={styles["footer-separator"]} />
				</div>
				<div className={styles["footer-copyright"]}>
					Copyright © PARK SI HYUNG. All rights reserved.
				</div>
				<div className={styles["footer-center-group"]}>
					<p className={styles["footer-paragraph"]}>
						<a
							href={"https://github.com/Yeoshin-TDD-Study-2nd"}
							className={styles["footer-link"]}
							target="_blank"
							rel="noopener noreferrer"
						>
							Source Code
						</a>
					</p>
					<div className={styles["footer-separator"]} />
					<p className={styles["footer-paragraph"]}>
						<a
							href={"https://github.com/Yeoshin-TDD-Study-2nd"}
							className={styles["footer-link"]}
							target="_blank"
							rel="noopener noreferrer"
						>
							Code of Conduct
						</a>
					</p>
					{LEGAL_URL && (
						<>
							<div className={styles["footer-separator"]} />
							<p className={styles["footer-paragraph"]}>
								<a
									href={LEGAL_URL}
									className={styles["footer-link"]}
									target="_blank"
									rel="noopener noreferrer"
								>
									Legal
								</a>
							</p>
						</>
					)}
				</div>
			</div>
		</footer>
	);
}
