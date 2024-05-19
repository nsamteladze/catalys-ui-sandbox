<script lang="ts" setup>
import markdownit from 'markdown-it';
import { ref, onMounted } from 'vue';

const md = markdownit({
  html: false,
  breaks: true,
  linkify: true,
  typographer: true
})

const result = md.render(`
## Chapter 2: An Introduction to Financial Statements

### The Four Financial Statements

Are you a fan of books, movies, or sporsts? If so, chances are you have heard or said the phrase “spoiler alert.” It is used to forewarn readers, viewers, or fans that the ending of a movie or book or outcome of a game is about to be revealed. Some people prefer knowing the end and skipping all of the details in the middle, while others prefer to fully immerse themselves and then discover the outcome. People often do not know or understand what accountants produce or provide. That is, they are not familiar with the “ending” of the accounting process, but that is the best place to begin the study of accounting.

Accountants create what are known as financial statements. Financial statements are reports that communicate the financial performance and financial position of the organization.

In essence, the overall purpose of financial statements is to evaluate the performance of a company, governmental entity, or not-for-profit entity. This chapter illustrates this through a company, which is considered to be in business to generate a profit. Each financial statement we examine has a unique function, and together they provide information to determine whether a company generated a profit or loss for a given period (such as a month, quarter, or year); the assets, which are resources of the company, and accompanying liabilities, which are obligations of the company, that are used to generate the profit or loss; owner interest in profits or losses; and the cash position of the company at the end of the period.

The four financial statements that perform these functions and the order in which we prepare them are:

1.  Income Statement
2.  Statement of Owner’s Equity
3.  Balance Sheet
4.  Statement of Cash Flows

The order of preparation is important as it relates to the concept of how financial statements are interrelated. Before explaining each in detail, let’s explore the purpose of each financial statement and its main components.

**Purpose of Financial Statements**

Before exploring the specific financial statements, it is important to know why these are important documents. To understand this, you must first understand who the users of financial statements are. Users of the information found in financial statements are called stakeholders. A **stakeholder** is someone affected by decisions made by a company; this can include groups or individuals affected by the actions or policies of an organization, including investors, creditors, employees, managers, regulators, customers, and suppliers. The stakeholder’s interest sometimes is not directly related to the entity’s financial performance. Examples of stakeholders include lenders, investors/owners, vendors, employees and management, governmental agencies, and the communities in which the businesses operate. Stakeholders are interested in the performance of an organization for various reasons, but the common goal of using the financial statements is to understand the information each contains that is useful for making financial decisions. For example, a banker may be interested in the financial statements to decide whether or not to lend the organization money.

Likewise, small business owners may make decisions based on their familiarity with the business—they know if the business is doing well or not based on their “gut feeling.” By preparing the financial statements, accountants can help owners by providing clarity of the organization’s financial performance. It is important to understand that, in the long term, every activity of the business has a financial impact, and financial statements are a way that accountants report the activities of the business. Stakeholders must make many decisions, and the financial statements provide information that is helpful in the decision-making process.

As described in Role of Accounting in Society, the complete set of financial statements acts as an X-ray of a company’s financial health. By evaluating all of the financial statements together, someone with financial knowledge can determine the overall health of a company. The accountant can use this information to advise outside (and inside) stakeholders on decisions, and management can use this information as one tool to make strategic short- and long-term decisions.

**The Income Statement**

The first financial statement prepared is the **income statement**, a statement that shows the organization’s financial performance for a given period of time. Let’s illustrate the purpose of an income statement using a real-life example. Assume your friend, Chris, who is a sole proprietor, started a summer landscaping business on August 1, 2020. It is categorized as a service entity. To keep this example simple, assume that she is using her family’s tractor, and we are using the cash basis method of accounting to demonstrate Chris’s initial operations for her business. The other available basis method that is commonly used in accounting is the accrual basis method. She is responsible for paying for fuel and any maintenance costs. She named the business Chris’ Landscaping. On August 31, Chris checked the account balance and noticed there is only \$250 in the checking account. This balance is lower than expected because she thought she had been paid by some customers. Chris decides to do some research to determine why the balance in the checking account is lower than expected. Her research shows that she earned a total of \$1,400 from her customers but had to pay \$100 to fix the brakes on her tractor, \$50 for fuel, and also made a \$1,000 payment to the insurance company for business insurance. The reason for the lower-than-expected balance was due to the fact that she spent (\$1,150 for brakes, fuel, and insurance) only slightly less than she earned (\$1,400)—a net increase of \$250. While she would like the checking balance to grow each month, she realizes most of the August expenses were infrequent (brakes and insurance) and the insurance, in particular, was an unusually large expense. She is convinced the checking account balance will likely grow more in September because she will earn money from some new customers; she also anticipates having fewer expenses.

*Figure 2.1 Income Statement for Chris’ Landscaping*

![A close-up of a financial statement Description automatically generated](media/6e1d33375e1fae32b19751fd2eb7bdd2.png)

The Income Statement can also be visualized by the formula: Revenue – Expenses = Net Income/(Loss).

Let’s change this example slightly and assume the \$1,000 payment to the insurance company will be paid in September, rather than in August. In this case, the ending balance in Chris’s checking account would be \$1,250, a result of earning \$1,400 and only spending \$100 for the brakes on her car and \$50 for fuel. This stream of cash flows is an example of cash basis accounting because it reflects when payments are received and made, not necessarily the time period that they affect. At the end of this section and in The Adjustment Process you will address accrual accounting, which does reflect the time period that they affect.

In accounting, this example illustrates an income statement, a financial statement that is used to measure the financial performance of an organization for a particular period of time. We use the simple landscaping account example to discuss the elements of the income statement, which are revenues, expenses, gains, and losses. Together, these determine whether the organization has net income (where revenues and gains are greater than expenses and losses) or net loss (where expenses and losses are greater than revenues and gains). Revenues, expenses, gains, and losses are further defined here.

*Revenue*

**Revenue** is the value of goods and services the organization sold or provided to customers for a given period of time. In our current example, Chris’s landscaping business, the “revenue” earned for the month of August would be \$1,400. It is the value Chris received in exchange for the services provided to her clients. Likewise, when a business provides goods or services to customers for cash at the time of the service or in the future, the business classifies the amount(s) as revenue. Just as the \$1,400 earned from a business made Chris’s checking account balance increase, revenues increase the value of a business. In accounting, revenues are often also called sales or fees earned. Just as earning wages from a business or summer job reflects the number of hours worked for a given rate of pay or payments from clients for services rendered, revenues (and the other terms) are used to indicate the dollar value of goods and services provided to customers for a given period of time.

**Expenses**

An expense is a cost associated with providing goods or services to customers. In our opening example, the expenses that Chris incurred totaled \$1,150 (consisting of \$100 for brakes, \$50 for fuel, and \$1,000 for insurance). You might think of expenses as the opposite of revenue in that expenses reduce Chris’s checking account balance. Likewise, expenses decrease the value of the business and represent the dollar value of costs incurred to provide goods and services to customers for a given period of time.

*Gains*

A **gain** can result from selling ancillary business items for more than the items are worth. (Ancillary business items are those that are used to support business operations.) To illustrate the concept of a gain, let’s return to our example. However, this example and the accompanying losses example are not going to be part of our income statement, balance sheet, or owner’s equity statement discussions. The gains and losses examples are only to be used in demonstrating the concepts of gains and losses. Assume that Chris paid \$1,500 for a small piece of property to use for building a storage facility for her company. Further assume that Chris has an opportunity to sell the land for \$2,000. She subsequently found a better storage option and decided to sell the property. After doing so, Chris will have a gain of \$500 (a selling price of \$2,000 and a cost of \$1,500) and will also have \$2,000 to deposit into her checking account, which would increase the balance.

Thinking back to the proceeds (\$1,400) Chris received from her landscaping business, we might ask the question: how are gains similar to and different from revenues? The revenue of \$1,400 that Chris earned from her business and the \$2,000 she received from selling the land are similar in that both increase her checking account balance and make her business more valuable.

A difference, however, is evident if we consider how these funds were earned. Chris earned the \$1,400 because she provided services (her labor) to her clients. Chris’s primary objective is to earn revenue by working for her clients. In addition, earning money by selling her land was an infrequent event for Chris, since her primary job was serving as a landscaper. Her primary goal is to earn fees or revenue, not to earn money by selling land. In fact, she cannot consider doing that again because she does not have additional land to sell.

The primary goal of a business is to earn revenue by providing goods and services to customers in exchange for cash at that time or in the future. While selling other items for more than the value of the item does occur in business, these transactions are classified as gains, because these sales are infrequent and not the primary purpose of the business.

*Losses*

A **loss** results from selling ancillary business items for less than the items are worth. To illustrate, let’s now assume that Chris sells her land that she purchased for \$1,500 at a sales price of \$1,200. In this case she would realize (incur) a loss of \$300 on the sale of the property (\$1,200 sales price minus the \$1,500 cost of purchasing the property) and will also have \$1,200 to deposit into her checking account, which would increase the balance.

You should not be confused by the fact that the checking account balance increased even though this transaction resulted in a financial loss. Chris received \$1,200 that she can deposit into her checking account and use for future expenses. The \$300 loss simply indicates that she received less for the land than she paid for it. These are two aspects of the same transaction that communicate different things, and it is important to understand the differences.

As we saw when comparing gains and revenues, losses are similar to expenses in that both losses and expenses decrease the value of the organization. In addition, just as Chris’s primary goal is to earn money from her job rather than selling land, in business, losses refer to infrequent transactions involving ancillary items of the business.

*Net Income (Net Loss)*

Net income (net loss) is determined by comparing revenues and expenses. **Net income** is a result of revenues (inflows) being greater than expenses (outflows). A **net loss** occurs when expenses (outflows) are greater than revenues (inflows). In accounting it is common to present net income in the following format:

![](media/4c8722fe6b498b11d404ccf6ba2310ba.png)

Recall that revenue is the value of goods and services a business provides to its customers and increase the value of the business. Expenses, on the other hand, are the costs of providing the goods and services and decrease the value of the business. When revenues exceed expenses, companies have net income. This means the business has been successful at earning revenues, containing expenses, or a combination of both. If, on the other hand, expenses exceed revenues, companies experience a net loss. This means the business was unsuccessful in earning adequate revenues, sufficiently containing expenses, or a combination of both. While businesses work hard to avoid net loss situations, it is not uncommon for a company to sustain a net loss from time-to-time. It is difficult, however, for businesses to remain viable while experiencing net losses over the long term.

Shown as a formula, the net income (loss) function is:

![](media/167528294f5b4dca1e61e5ec922d4056.png)

To be complete, we must also consider the impact of gains and losses. While gains and losses are infrequent in a business, it is not uncommon that a business would present a gain and/or loss in its financial statements. Recall that gains are similar to revenue and losses are similar to expenses. Therefore, the traditional accounting format would be:

![](media/62fb5e2c28f2e1d55f11fff2b9491f8a.png)

Shown as a formula, the net income (loss) function, including gains and losses, is:

![](media/6cdce481dcd0c70d302836adf2cb98bf.png)

When assessing a company’s net income, it is important to understand the source of the net income. Businesses strive to attain “high-quality” net income (earnings). High-quality earnings are based on sustainable earnings—also called permanent earnings—while relying less on infrequent earnings—also called temporary earnings. Recall that revenues represent the ongoing value of goods and services the business provides (sells) to its customers, while gains are infrequent and involve items ancillary to the primary purpose of the business. We should use caution if a business attains a significant portion of its net income as a result of gains, rather than revenues. Likewise, net losses derived as a result of losses should be put into the proper perspective due to the infrequent nature of losses. While net losses are undesirable for any reason, net losses that result from expenses related to ongoing operations, rather than losses that are infrequent, are more concerning for the business.

**Statement of Owner’s Equity**

Equity is a term that is often confusing but is a concept with which you are probably already familiar. In short, equity is the value of an item that remains after considering what is owed for that item. The following example may help illustrate the concept of equity.

When thinking about the concept of equity, it is often helpful to think about an example many families are familiar with: purchasing a home. Suppose a family purchases a home worth \$200,000. After making a down payment of \$25,000, they secure a bank loan to pay the remaining \$175,000. What is the value of the family’s equity in the home? If you answered \$25,000, you are correct. At the time of the purchase, the family owns a home worth \$200,000 (an asset), but they owe \$175,000 (a liability), so the equity or net worth in the home is \$25,000.

The **statement of owner’s equity**, which is the second financial statement created by accountants, is a statement that shows how the equity (or value) of the organization has changed over time. Similar to the income statement, the statement of owner’s equity is for a specific period of time, typically one year. Recall that another way to think about equity is net worth, or value. So, the statement of owner’s equity is a financial statement that shows how the net worth, or value, of the business has changed for a given period of time.

![](media/62eb398217b6d0e43e36c7e0d3cf4a9d.png)

The elements of the financial statements shown on the statement of owner’s equity include investments by owners as well as distributions to owners. Investments by owners and distributions to owners are two activities that impact the value of the organization (increase and decrease, respectively). In addition, net income or net loss affects the value of the organization (net income increases the value of the organization, and net loss decreases it). Net income (or net loss) is also shown on the statement of owner’s equity; this is an example of how the statements are interrelated. Note that the word owner’s (singular for a sole owner) changes to owners’ (plural, for a group of owners) when preparing this statement for an entity with multiple owners versus a sole proprietorship.

In our example, to make it less complicated, we started with the first month of operations for Chris’s Landscaping. In the first month of operations, the owner’s equity total begins the month of August 2020, at \$0, since there have been no transactions. During the month, the business received revenue of \$1,400 and incurred expenses of \$1,150, for net income of \$250. Since Chris did not contribute any investment or make any withdrawals, other than the \$1,150 for expenses, the ending balance in the owner’s equity account on August 31, 2020, would be \$250, the net income earned.

At this stage, it’s important to point out that we are working with a sole proprietorship to help simplify the examples. We have addressed the owner’s value in the firm as capital or owner’s equity. However, later we switch the structure of the business to a corporation, and instead of owner’s equity we begin using stockholder’s equity, which includes account titles such as common stock and retained earnings to represent the owners’ interests.

The corporate treatment is more complicated because corporations may have a few owners up to potentially thousands of owners (stockholders).

*Investments by Owners*

Generally, there are two ways by which organizations become more valuable: profitable operations (when revenues exceed expenses) and investments by owners. Organizations often have long-term goals or projects that are very expensive (for example, building a new manufacturing facility or purchasing another company).

While having profitable operations is a viable way to “fund” these goals and projects, organizations often want to undertake these projects in a quicker time frame. Selling ownership is one way to quickly obtain the funding necessary for these goals. **Investments by owners** represent an exchange of cash or other assets for which the investor is given an ownership interest in the organization. This is a mutually beneficial arrangement: the organization gets the funding it needs on a timely basis, and the investor gets an ownership interest in the organization.

When organizations generate funding by selling ownership, the ownership interest usually takes the form of **common stock**, which is the corporation’s primary class of stock issued, with each share representing a partial claim to ownership or a share of the company’s business. When the organization issues common stock for the first time, it is called an **initial public offering (IPO)**. In Corporation Accounting, you learn more about the specifics of this type of accounting. Once a company issues (or sells) common stock after an IPO, we describe the company as a **publicly traded company**, which simply means the company’s stock can be purchased by the general public on a public exchange like the New York Stock Exchange (NYSE). That is, investors can become owners of the particular company. Companies that issue publicly traded common shares in the United States are regulated by the **Securities and Exchange Commission (SEC)**, a federal regulatory agency that, among other responsibilities, is charged with oversight of financial investments such as common stock.

*Distributions to Owners*

There are basically two ways in which organizations become less valuable in terms of owners’ equity: from unprofitable operations (when expenses or losses exceed revenues or gains) and by distributions to owners. Owners (investors) of an organization want to see their investment appreciate (gain) in value. Over time, owners of common stock can see the value of the stock increase in value—the share price increases—due to the success of the organization. Organizations may also make **distributions to owners**, which are periodic rewards issued to the owners in the form of cash or other assets. Distributions to owners represent some of the value (equity) of the organization.

For investors who hold common stock in the organization, these periodic payments or distributions to owners are called **dividends**. For sole proprietorships, distributions to owners are withdrawals or drawings. From the organization’s perspective, dividends represent a portion of the net worth (equity) of the organization that is returned to owners as a reward for their investment. While issuing dividends does, in fact, reduce the organization’s assets, some argue that paying dividends increases the organization’s long-term value by making the stock more desirable. (Note that this topic falls under the category of “dividend policy” and there is a significant stream of research addressing this.)

**Balance Sheet**

Once the statement of owner’s equity is completed, accountants typically complete the **balance sheet**, a statement that lists what the organization owns (assets), what it owes (liabilities), and what it is worth (equity) on a specific date. Notice the change in timing of the report. The income statement and statement of owner’s equity report the financial performance and equity change for a period of time. The balance sheet, however, lists the financial position at the close of business on a specific date.

![](media/93a9e17b89222155a5416abe8a7b3a21.png)

**Assets**

If you recall our previous example involving Chris and her newly established landscaping business, you are probably already familiar with the term **asset**—these are resources used to generate revenue. In Chris’s business, to keep the example relatively simple, the business ended the month with one asset, cash, assuming that the insurance was for one month’s coverage.

However, as organizations become more complex, they often have dozens or more types of assets. An asset can be categorized as a **short-term asset** or current asset (which is typically used up, sold, or converted to cash in one year or less) or as a **long-term asset** or noncurrent asset (which is not expected to be converted into cash or used up within one year). Long-term assets are often used in the production of products and services.

Examples of short-term assets that businesses own include cash, accounts receivable, and inventory, while examples of long-term assets include land, machinery, office furniture, buildings, and vehicles. Several of the chapters that you will study are dedicated to an in-depth coverage of the special characteristics of selected assets. Examples include Merchandising Transactions, which are typically short term, and Long-Term Assets, which are typically long term.

An asset can also be categorized as a tangible asset or an intangible asset. **Tangible assets** have a physical nature, such as trucks or many inventory items, while **intangible assets** have value but often lack a physical existence or corpus, such as insurance policies or trademarks.

*Liabilities*

You are also probably already familiar with the term **liability**—these are amounts owed to others (called creditors). A liability can also be categorized as a **short-term liability** (or current liability) or a **long-term liability** (or noncurrent liability), similar to the treatment accorded assets. Short-term liabilities are typically expected to be paid within one year or less, while long-term liabilities are typically expected to be due for payment more than one year past the current balance sheet date.

Common short-term liabilities or amounts owed by businesses include amounts owed for items purchased on credit (also called accounts payable), taxes, wages, and other business costs that will be paid in the future. Long-term liabilities can include such liabilities as long-term notes payable, mortgages payable, or bonds payable.

**Equity**

In the Statement of Owner’s Equity discussion, you learned that **equity** (or net assets) refers to book value or net worth. In our example, Chris’s Landscaping, we determined that Chris had \$250 worth of equity in her company at the end of the first month (see Figure 2.2).

At any point in time, it is important for stakeholders to know the financial position of a business. Stated differently, it is important for employees, managers, and other interested parties to understand what a business owns, owes, and is worth at any given point. This provides stakeholders with valuable financial information to make decisions related to the business.

**Statement of Cash Flows**

The fourth and final financial statement prepared is the **statement of cash flows**, which is a statement that lists the cash inflows and cash outflows for the business for a period of time. At first glance, this may seem like a redundant financial statement. We know the income statement also reports the inflows and outflows for the business for a period of time. In addition, the statement of owner’s equity and the balance sheet help to show the other activities, such as investments by and distributions to owners that are not included in the income statement. To understand why the statement of cash flows is necessary, we must first understand the two bases of accounting used to prepare the financial statements. The changes in cash within this statement are often referred to as sources and uses of cash. A source of cash lets one see where cash is coming from. For example, is cash being generated from sales to customers, or is the cash a result of an advance in a large loan. Use of cash looks at what cash is being used for. Is cash being used to make an interest payment on a loan, or is cash being used to purchase a large piece of machinery that will expand business capacity? The two bases of accounting are the cash basis and the accrual basis.

Under **cash basis accounting**, transactions (i.e., a sale or a purchase) are not recorded in the financial statements until there is an exchange of cash. This type of accounting is permitted for nonprofit entities and small businesses that elect to use this type of accounting. Under **accrual basis accounting**, transactions are generally recorded in the financial statement when the transactions occur, and not when paid, although in some situations the two events could happen on the same day.

An example of the two methods (cash versus accrual accounting) would probably help clarify their differences. Assume that a mechanic performs a tune-up on a client’s car on May 29, and the customer picks up her car and pays the mechanic \$100 on June 2. If the mechanic were using the cash method, the revenue would be recognized on June 2, the date of payment, and any expenses would be recognized when paid.

If the accrual method were used, the mechanic would recognize the revenue and any related expenses on May 29, the day the work was completed. The accrual method will be the basis for your studies here (except for our coverage of the cash flow statement in Statement of Cash Flows). The accrual method is also discussed in greater detail in Explain the Steps within the Accounting Cycle through the Unadjusted Trial Balance.

While the cash basis of accounting is suited well and is more efficient for small businesses and certain types of businesses, such as farming, and those without inventory, like lawyers and doctors, the accrual basis of accounting is theoretically preferable to the cash basis of accounting. Accrual accounting is advantageous because it distinguishes between the timing of the transactions (when goods and services are provided) and when the cash involved in the transactions is exchanged (which can be a significant amount of time after the initial transaction). This allows accountants to provide, in a timely manner, relevant and complete information to stakeholders. The Adjustment Process explores several common techniques involved in accrual accounting.

Two brief examples may help illustrate the difference between cash accounting and accrual accounting. Assume that a business sells \$200 worth of merchandise. In some businesses, there are two ways the customers pay: cash and credit (also referred to as “on account”). Cash sales include checks and credit cards and are paid at the time of the sale. Credit sales (not to be confused with credit card sales) allow the customer to take the merchandise but pay within a specified period of time, usually up to forty-five days.

A cash sale would be recorded in the financial statements under both the cash basis and accrual basis of accounting. It makes sense because the customer received the merchandise and paid the business at the same time. It is considered two events that occur simultaneously (exchange of merchandise for cash).

Similar to the previous example for the mechanic, a credit sale, however, would be treated differently under each of these types of accounting. Under the cash basis of accounting, a credit sale would not be recorded in the financial statements until the cash is received, under terms stipulated by the seller. For example, assume on April 1 a landscaping business provides \$500 worth of services to one of its customers. The sale is made on account, with the payment due forty-five days later. Under the cash basis of accounting, the revenue would not be recorded until May 16, when the cash was received. Under the accrual basis of accounting, this sale would be recorded in the financial statements at the time the services were provided, April 1. The reason the sale would be recorded is, under accrual accounting, the business reports that it provided \$500 worth of services to its customer. The fact the customers will pay later is viewed as a separate transaction under accrual accounting.

![](media/4328bb308b3616d3f2572c80aace3e7e.png)

Let’s now explore the difference between the cash basis and accrual basis of accounting using an expense. Assume a business purchases \$160 worth of printing supplies from a supplier (vendor). Similar to a sale, a purchase of merchandise can be paid for at the time of sale using cash (also a check or credit card) or at a later date (on account). A purchase paid with cash at the time of the sale would be recorded in the financial statements under both cash basis and accrual basis of accounting. It makes sense because the business received the printing supplies from the supplier and paid the supplier at the same time. It is considered two events that occur simultaneously (exchange of merchandise for cash).

If the purchase was made on account (also called a credit purchase), however, the transaction would be recorded differently under each of these types of accounting. Under the cash basis of accounting, the \$160 purchase on account would not be recorded in the financial statements until the cash is paid, as stipulated by the seller’s terms. For example, if the printing supplies were received on July 17 and the payment terms were fifteen days, no transaction would be recorded until August 1, when the goods were paid for. Under the accrual basis of accounting, this purchase would be recorded in the financial statements at the time the business received the printing supplies from the supplier (July 17). The reason the purchase would be recorded is that the business reports that it bought \$160 worth of printing supplies from its vendors. The fact the business will pay later is viewed as a separate issue under accrual accounting. Table 2.2 summarizes these examples under the different bases of accounting.

*Table 2.2 Transactions by Cash Basis versus Accrual Basis of Accounting*

| **Transaction**           | **Under Cash Basis Accounting**                             | **Under Accrual Basis Accounting**                   |
|---------------------------|-------------------------------------------------------------|------------------------------------------------------|
| \$200 sale for cash       | Recorded in financial statements at time of sale            | Recorded in financial statements at time of sale     |
| \$200 sale on account     | Not recorded in financial statements until cash is received | Recorded in financial statements at time of sale     |
| \$160 purchase for cash   | Recorded in financial statements at time of purchase        | Recorded in financial statements at time of purchase |
| \$160 purchase on account | Not recorded in financial statements until cash is paid     | Recorded in financial statements at time of purchase |

Knowing the difference between the cash basis and accrual basis of accounting is necessary to understand the need for the statement of cash flows. Stakeholders need to know the financial performance (as measured by the income statement—that is, net income or net loss) and financial position (as measured by the balance sheet—that is, assets, liabilities, and owners’ equity) of the business. This information is provided in the income statement, statement of owner’s equity, and balance sheet. However, since these financial statements are prepared using accrual accounting, stakeholders do not have a clear picture of the business’s cash activities. The statement of cash flows solves this inadequacy by specifically focusing on the cash inflows and cash outflows.

### Preparing Financial Statements

In addition to what you’ve already learned about assets and liabilities, and their potential categories, there are a couple of other points to understand about assets. Plus, given the importance of these concepts, it helps to have an additional review of the material.

To help clarify these points, we return to our coffee shop example and now think of the coffee shop’s assets—items the coffee shop owns or controls. Review the list of assets you created for the local coffee shop. Did you happen to notice many of the items on your list have one thing in common: the items will be used over a long period of time? In accounting, we classify assets based on whether or not the asset will be used or consumed within a certain period of time, generally one year. If the asset will be used or consumed in one year or less, we classify the asset as a **current asset**. If the asset will be used or consumed over more than one year, we classify the asset as a **noncurrent asset.**

Another thing you might have recognized when reviewing your list of coffee shop assets is that all of the items were something you could touch or move, each of which is known as a tangible asset. However, as you also learned in Describe the Income Statement, Statement of Owner’s Equity, Balance Sheet, and Statement of Cash Flows, and How They Interrelate, not all assets are tangible. An asset could be an intangible asset, meaning the item lacks physical substance—it cannot be touched or moved. Take a moment to think about your favorite type of shoe or a popular type of farm tractor. Would you be able to recognize the maker of that shoe or the tractor by simply seeing the logo? Chances are you would. These are examples of intangible assets, trademarks to be precise. A trademark has value to the organization that created (or purchased) the trademark, and the trademark is something the organization controls—others cannot use the trademark without permission.

Similar to the accounting for assets, liabilities are classified based on the time frame in which the liabilities are expected to be settled. A liability that will be settled in one year or less (generally) is classified as a **current liability**, while a liability that is expected to be settled in more than one year is classified as a **noncurrent liability**.

Examples of current assets include **accounts receivable**, which is the outstanding customer debt on a credit sale; **inventory**, which is the value of products to be sold or items to be converted into sellable products; and sometimes a **notes receivable**, which is the value of amounts loaned that will be received in the future with interest, assuming that it will be paid within a year.

Examples of current liabilities include **accounts payable**, which is the value of goods or services purchased that will be paid for at a later date, and **notes payable**, which is the value of amounts borrowed (usually not inventory purchases) that will be paid in the future with interest.

Examples of noncurrent assets include notes receivable (notice notes receivable can be either current or noncurrent), land, buildings, equipment, and vehicles. An example of a noncurrent liability is notes payable (notice notes payable can be either current or noncurrent).

*Why Does Current versus Noncurrent Matter?*

At this point, let’s take a break and explore why the distinction between current and noncurrent assets and liabilities matters. It is a good question because, on the surface, it does not seem to be important to make such a distinction. After all, assets are things owned or controlled by the organization, and liabilities are amounts owed by the organization; listing those amounts in the financial statements provides valuable information to stakeholders. But we have to dig a little deeper and remind ourselves that stakeholders are using this information to make decisions. Providing the amounts of the assets and liabilities answers the “what” question for stakeholders (that is, it tells stakeholders the value of assets), but it does not answer the “when” question for stakeholders. For example, knowing that an organization has \$1,000,000 worth of assets is valuable information, but knowing that \$250,000 of those assets are current and will be used or consumed within one year is more valuable to stakeholders. Likewise, it is helpful to know the company owes \$750,000 worth of liabilities, but knowing that \$125,000 of those liabilities will be paid within one year is even more valuable. In short, the timing of events is of particular interest to stakeholders.

*Equity and Legal Structure*

Recall that equity can also be referred to as net worth—the value of the organization. The concept of equity does not change depending on the legal structure of the business (sole proprietorship, partnership, and corporation). The terminology does, however, change slightly based on the type of entity. For example, investments by owners are considered “capital” transactions for sole proprietorships and partnerships but are considered “common stock” transactions for corporations. Likewise, distributions to owners are considered “drawing” transactions for sole proprietorships and partnerships but are considered “dividend” transactions for corporations.

As another example, in sole proprietorships and partnerships, the final amount of net income or net loss for the business becomes “Owner(s), Capital.” Beginning at the inception of a corporation, income that has not been distributed as dividends accumulates to form **retained earnings**. Net losses decrease retained earnings.

The essence of these transactions remains the same: organizations become more valuable when owners make investments in the business and the businesses earn a profit (net income), and organizations become less valuable when owners receive distributions (dividends) from the organization and the businesses incur a loss (net loss). Because accountants are providing information to stakeholders, it is important for accountants to fully understand the specific terminology associated with the various legal structures of organizations.

**The Accounting Equation**

Recall the simple example of a home loan discussed in Describe the Income Statement, Statement of Owner’s Equity, Balance Sheet, and Statement of Cash Flows, and How They Interrelate. In that example, we assumed a family purchased a home valued at \$200,000 and made a down payment of \$25,000 while financing the remaining balance with a \$175,000 bank loan. This example demonstrates one of the most important concepts in the study of accounting: the accounting equation, which is:

| **Assets = Liabilities + Owner’s Equity** |
|-------------------------------------------|

In our example, the accounting equation would look like this:

\$200,000=\$175,000+\$25,000

As you continue your accounting studies and you consider the different major types of business entities available (sole proprietorships, partnerships, and corporations), there is another important concept for you to remember. This concept is that no matter which of the entity options that you choose, the accounting process for all of them will be predicated on the accounting equation.

It may be helpful to think of the accounting equation from a “sources and claims” perspective. Under this approach, the assets (items owned by the organization) were obtained by incurring liabilities or were provided by owners. Stated differently, every asset has a claim against it—by creditors and/or owners.

*Expanding the Accounting Equation*

Let’s continue our exploration of the accounting equation, focusing on the equity component, in particular. Recall that we defined equity as the net worth of an organization. It is helpful to also think of net worth as the value of the organization. Recall, too, that revenues (inflows as a result of providing goods and services) increase the value of the organization. So, every dollar of revenue an organization generates increases the overall value of the organization.

Likewise, expenses (outflows as a result of generating revenue) decrease the value of the organization. So, each dollar of expenses an organization incurs decreases the overall value of the organization. The same approach can be taken with the other elements of the financial statements:

-   Gains increase the value (equity) of the organization.
-   Losses decrease the value (equity) of the organization.
-   Investments by owners increase the value (equity) of the organization.
-   Distributions to owners decrease the value (equity) of the organization.
-   Changes in assets and liabilities can either increase or decrease the value (equity) of the organization depending on the net result of the transaction.

A graphical representation of this concept is shown in Figure 2.7.

*Figure 2.1 Graphical Representation of the Accounting Equation*

![](media/70f600f78c314127ca28dbe106393ea3.png)

The format of this illustration is also intended to introduce you to a concept you will learn more about in your study of accounting. Notice each account subcategory (Current Assets and Noncurrent Assets, for example) has an “increase” side and a “decrease” side. These are called T-accounts and will be used to analyze transactions, which is the beginning of the accounting process. See Analyzing and Recording Transactions for a more comprehensive discussion of analyzing transactions and T-Accounts.

*Not All Transactions Affect Equity*

As you continue to develop your understanding of accounting, you will encounter many types of transactions involving different elements of the financial statements. The previous examples highlighted elements that change the equity of an organization. Not all transactions, however, ultimately impact equity. For example, the following do not impact the equity or net worth of the organization:

-   Exchanges of assets for assets
-   Exchanges of liabilities for liabilities
-   Acquisitions of assets by incurring liabilities
-   Settlements of liabilities by transferring assets

It is important to understand the inseparable connection between the elements of the financial statements and the possible impact on organizational equity (value). We explore this connection in greater detail as we return to the financial statements.

**Prepare an Income Statement, Statement of Owner’s Equity, and Balance Sheet**

One of the key factors for success for those beginning the study of accounting is to understand how the elements of the financial statements relate to each of the financial statements. That is, once the transactions are categorized into the elements, knowing what to do next is vital. This is the beginning of the process to create the financial statements. It is important to note that financial statements are discussed in the order in which the statements are presented.

*Elements of the Financial Statements*

When thinking of the relationship between the elements and the financial statements, we might think of a baking analogy: the elements represent the ingredients, and the financial statements represent the finished product. As with baking a cake, knowing the ingredients (elements) and how each ingredient relates to the final product (financial statements) is vital to the study of accounting.

To help accountants prepare and users better understand financial statements, the profession has outlined what is referred to as elements of the financial statements, which are those categories or accounts that accountants use to record transactions and prepare financial statements. There are ten **elements of the financial statements**, and we have already discussed most of them.

-   **Revenue**—value of goods and services the organization sold or provided.
-   **Expenses**—costs of providing the goods or services for which the organization earns revenue.
-   **Gains**—gains are similar to revenue but relate to “incidental or peripheral” activities of the organization.
-   **Losses**—losses are similar to expenses but related to “incidental or peripheral” activities of the organization.
-   **Assets**—items the organization owns, controls, or has a claim to.
-   **Liabilities**—amounts the organization owes to others (also called creditors).
-   **Equity**—the net worth (or net assets) of the organization.
-   **Investment by owners**—cash or other assets provided to the organization in exchange for an ownership interest.
-   **Distribution to owners**—cash, other assets, or ownership interest (equity) provided to owners.
-   **Comprehensive income**—defined as the “change in equity of a business enterprise during a period from transactions and other events and circumstances from nonowner sources”. While further discussion of comprehensive income is reserved for intermediate and advanced studies in accounting, it is worth noting that comprehensive income has four components, focusing on activities related to foreign currency, derivatives, investments, and pensions.

**Financial Statements for a Sample Company**

Now it is time to bake the cake (i.e., prepare the financial statements). We have all of the ingredients (elements of the financial statements) ready, so let’s now return to the financial statements themselves. Let’s use as an example a fictitious company named Cheesy Chuck’s Classic Corn. This company is a small retail store that makes and sells a variety of gourmet popcorn treats. It is an exciting time because the store opened in the current month, June.

Assume that as part of your summer job with Cheesy Chuck’s, the owner—you guessed it, Chuck—has asked you to take over for a former employee who graduated college and will be taking an accounting job in New York City. In addition to your duties involving making and selling popcorn at Cheesy Chuck’s, part of your responsibility will be doing the accounting for the business. The owner, Chuck, heard that you are studying accounting and could really use the help, because he spends most of his time developing new popcorn flavors.

The former employee has done a nice job of keeping track of the accounting records, so you can focus on your first task of creating the June financial statements, which Chuck is eager to see. Figure 2.8 shows the financial information (as of June 30) for Cheesy Chuck’s.

*Figure 2.8*

![](media/667d344703daf292db0f216b82ed2dc2.png)

We should note that we are oversimplifying some of the things in this example. First, the amounts in the accounting records were given. We did not explain how the amounts would be derived. This process is explained starting in Analyzing and Recording Transactions. Second, we are ignoring the timing of certain cash flows such as hiring, purchases, and other startup costs. In reality, businesses must invest cash to prepare the store, train employees, and obtain the equipment and inventory necessary to open. These costs will precede the selling of goods and services. In the example to follow, for instance, we use Lease payments of \$24,000, which represents lease payments for the building (\$20,000) and equipment (\$4,000). In practice, when companies lease items, the accountants must determine, based on accounting rules, whether or not the business “owns” the item. If it is determined the business “owns” the building or equipment, the item is listed on the balance sheet at the original cost. Accountants also take into account the building or equipment’s value when the item is worn out. The difference in these two values (the original cost and the ending value) will be allocated over a relevant period of time. As an example, assume a business purchased equipment for \$18,000 and the equipment will be worth \$2,000 after four years, giving an estimated decline in value (due to usage) of \$16,000 (\$18,000 − \$2,000). The business will allocate \$4,000 of the equipment cost over each of the four years (\$18,000 minus \$2,000 over four years). This is called depreciation and is one of the topics that is covered in Long-Term Assets.

Also, the Equipment with a value of \$12,500 in the financial information provided was purchased at the end of the first accounting period. It is an asset that will be depreciated in the future, but no depreciation expense is allocated in our example.

*Income Statement*

Let’s prepare the income statement so we can inform how Cheesy Chuck’s performed for the month of June (remember, an income statement is for a period of time). Our first step is to determine the value of goods and services that the organization sold or provided for a given period of time. These are the inflows to the business, and because the inflows relate to the primary purpose of the business (making and selling popcorn), we classify those items as Revenues, Sales, or Fees Earned. For this example, we use Revenue. The revenue for Cheesy Chuck’s for the month of June is \$85,000.

Next, we need to show the total expenses for Cheesy Chuck’s. Because Cheesy Chuck’s tracks different types of expenses, we need to add the amounts to calculate total expenses. If you added correctly, you get total expenses for the month of June of \$79,200. The final step to create the income statement is to determine the amount of net income or net loss for Cheesy Chuck’s. Since revenues (\$85,000) are greater than expenses (\$79,200), Cheesy Chuck’s has a net income of \$5,800 for the month of June. Figure 2.2 displays the June income statement for Cheesy Chuck’s Classic Corn.

*Figure 2.2 Income Statement for Cheesy Chuck’s Classic Corn.*

![](media/4ab1fb214be2c8015de2ded0e761d402.png)

Financial statements are created using numerous standard conventions or practices. The standard conventions provide consistency and help assure financial statement users the information is presented in a similar manner, regardless of the organization issuing the financial statement. Let’s look at the standard conventions shown in the Cheesy Chuck’s income statement:

-   The heading of the income statement includes three lines.
    -   The first line lists the business name.
        -   The middle line indicates the financial statement that is being presented.
        -   The last line indicates the time frame of the financial statement. Do not forget the income statement is for a period of time (the month of June in our example).
-   There are three columns.
-   Going from left to right, the first column is the category heading or account.
-   The second column is used when there are numerous accounts in a particular category (Expenses, in our example).
-   The third column is a total column. In this illustration, it is the column where subtotals are listed and net income is determined (subtracting Expenses from Revenues).
-   Subtotals are indicated by a single underline, while totals are indicated by a double underline. Notice the amount of Miscellaneous Expense (\$300) is formatted with a single underline to indicate that a subtotal will follow. Similarly, the amount of “Net Income” (\$5,800) is formatted with a double underline to indicate that it is the final value/total of the financial statement.
-   There are no gains or losses for Cheesy Chuck’s. Gains and losses are not unusual transactions for businesses, but gains and losses may be infrequent for some, especially small, businesses.

*Statement of Owner’s Equity*

Let’s create the statement of owner’s equity for Cheesy Chuck’s for the month of June. Since Cheesy Chuck’s is a brand-new business, there is no beginning balance of Owner’s Equity. The first items to account for are the increases in value/equity, which are investments by owners and net income. As you look at the accounting information you were provided, you recognize the amount invested by the owner, Chuck, was \$12,500. Next, we account for the increase in value as a result of net income, which was determined in the income statement to be \$5,800. Next, we determine if there were any activities that decreased the value of the business. More specifically, we are accounting for the value of distributions to the owners and net loss, if any.

It is important to note that an organization will have either net income or net loss for the period, but not both. Also, small businesses in particular may have periods where there are no investments by, or distributions to, the owner(s). For the month of June, Chuck withdrew \$1,450 from the business. This is a good time to recall the terminology used by accountants based on the legal structure of the particular business. Since the account was titled “Drawings by Owner” and because Chuck is the only owner, we can assume this is a sole proprietorship. If the business was structured as a corporation, this activity would be called something like “Dividends Paid to Owners.”

At this stage, remember that since we are working with a sole proprietorship to help simplify the examples, we have addressed the owner’s value in the firm as capital or owner’s equity. However, later we switch the structure of the business to a corporation, and instead of owner’s equity, we begin using such account titles as common stock and retained earnings to represent the owner’s interests. The corporate treatment is more complicated, because corporations may have a few owners up to potentially thousands of owners (stockholders). The details of accounting for the interests of corporations are covered in Corporation Accounting.

So how much did the value of Cheesy Chuck’s change during the month of June? You are correct if you answered \$16,850. Since this is a brand-new store, the beginning value of the business is zero. During the month, the owner invested \$12,500 and the business had profitable operations (net income) of \$5,800. Also, during the month the owner withdrew \$1,450, resulting in a net change (and ending balance) to owner’s equity of \$16,850. Shown in a formula:

Beginning Balance + Investments by Owners ± Net Income (Net Loss) – Distributions, or

\$0+\$12,500+\$5,800–\$1,450=\$16,850

Figure 2.3 shows what the statement of owner’s equity for Cheesy Chuck’s Classic Corn would look like.

*Figure 2.3* *Statement of Owner’s Equity for Cheesy Chuck’s Classic Corn*

![](media/bfad0494eda6e263f258a99b08deb0e9.png)

Notice the following about the statement of owner’s equity for Cheesy Chuck’s:

-   The format is similar to the format of the income statement (three lines for the heading, three columns).
-   The statement follows a chronological order, starting with the first day of the month, accounting for the changes that occurred throughout the month, and ending with the final day of the month.

The statement uses the final number from the financial statement previously completed. In this case, the statement of owner’s equity uses the net income (or net loss) amount from the income statement (Net Income, \$5,800).

*Balance Sheet*

Let’s create a balance sheet for Cheesy Chuck’s for June 30. To begin, we look at the accounting records and determine what assets the business owns and the value of each. Cheesy Chuck’s has two assets: Cash (\$6,200) and Equipment (\$12,500). Adding the amount of assets gives a total asset value of \$18,700. As discussed previously, the equipment that was recently purchased will be depreciated in the future, beginning with the next accounting period.

Next, we determine the amount of money that Cheesy Chuck’s owes (liabilities). There are also two liabilities for Cheesy Chuck’s. The first account listed in the records is Accounts Payable for \$650. Accounts Payable is the amount that Cheesy Chuck’s must pay in the future to vendors (also called suppliers) for the ingredients to make the gourmet popcorn. The other liability is Wages Payable for \$1,200. This is the amount that Cheesy Chuck’s must pay in the future to employees for work that has been performed. Adding the two amounts gives us total liabilities of \$1,850. (Here’s a hint as you develop your understanding of accounting: Liabilities often include the word “payable.” So, when you see “payable” in the account title, know these are amounts owed in the future—liabilities.)

Finally, we determine the amount of equity the owner, Cheesy Chuck, has in the business. The amount of owner’s equity was determined on the statement of owner’s equity in the previous step (\$16,850). Can you think of another way to confirm the amount of owner’s equity? Recall that equity is also called net assets (assets minus liabilities). If you take the total assets of Cheesy Chuck’s of \$18,700 and subtract the total liabilities of \$1,850, you get owner’s equity of \$16,850. Using the basic accounting equation, the balance sheet for Cheesy Chuck’s as of June 30 is shown in Figure 2.4.

*Figure 2.4* *Balance Sheet for Cheesy Chuck’s Classic Corn.*

![](media/031905841f55e4dd3c3014945622bda2.png)

**Connecting the Income Statement and the Balance Sheet**

Another way to think of the connection between the income statement and balance sheet (which is aided by the statement of owner’s equity) is by using a sports analogy. The income statement summarizes the financial performance of the business for a given period of time. The income statement reports how the business performed financially each month—the firm earned either net income or net loss. This is similar to the outcome of a particular game—the team either won or lost.

The balance sheet summarizes the financial position of the business on a given date. Meaning, because of the financial performance over the past twelve months, for example, this is the financial position of the business as of December 31. Think of the balance sheet as being similar to a team’s overall win/loss record—to a certain extent a team’s strength can be perceived by its win/loss record.

However, because different companies have different sizes, you do not necessarily want to compare the balance sheets of two different companies. For example, you would not want to compare a local retail store with Walmart. In most cases you want to compare a company with its past balance sheet information.

**Statement of Cash Flows**

In Describe the Income Statement, Statement of Owner’s Equity, Balance Sheet, and Statement of Cash Flows, and How They Interrelate, we discussed the function of and the basic characteristics of the statement of cash flows. This fourth and final financial statement lists the cash inflows and cash outflows for the business for a period of time. It was created to fill in some informational gaps that existed in the other three statements (income statement, owner’s equity/retained earnings statement, and the balance sheet). A full demonstration of the creation of the statement of cash flows is presented in Statement of Cash Flows.

**Creating Financial Statements: A Summary**

In this example using a fictitious company, Cheesy Chuck’s, we began with the account balances and demonstrated how to prepare the financial statements for the month of June, the first month of operations for the business. It will be helpful to revisit the process by summarizing the information we started with and how that information was used to create the four financial statements: income statement, statement of owner’s equity, balance sheet, and statement of cash flows. We started with the account balances shown in Figure 2.5.

*Figure 2.5 Account Balances for Cheesy Chuck’s Classic Corn*

![](media/b148c4e2a94d8feaba6ac07abafac8cc.png)

The next step was to create the income statement, which shows the financial performance of the business. The income statement is shown in Figure 2.6.

*Figure 2.6 Income Statement for Cheesy Chuck’s Classic Corn*

![](media/0109f552c2ce6b6342b8fb1e10c912e9.png)

Next, we created the statement of owner’s equity, shown in Figure 2.7. The statement of owner’s equity demonstrates how the equity (or net worth) of the business changed for the month of June. Do not forget that the Net Income (or Net Loss) is carried forward to the statement of owner’s equity.

*Figure 2.7 Statement of Owner’s Equity for Cheesy Chuck’s Classic Corn*

![](media/f12c046bb6eb955b152f03005c1ee98d.png)

The third financial statement created is the balance sheet, which shows the company’s financial position on a given date. Cheesy Chuck’s balance sheet is shown in Figure 2.8.

*Figure 2.8 Balance Sheet for Cheesy Chuck’s Classic Corn*

![](media/58a1b7fe28349bd504db367de91bf491.png)

### Comprehension Check

Placeholder for comprehension check questions.

### Financial Statement Analysis

Financial statement analysis reviews financial information found on financial statements to make informed decisions about the business. The income statement, statement of retained earnings, balance sheet, and statement of cash flows, among other financial information, can be analyzed. The information obtained from this analysis can benefit decision-making for internal and external stakeholders and can give a company valuable information on overall performance and specific areas for improvement. The analysis can help them with budgeting, deciding where to cut costs, how to increase revenues, and future capital investments opportunities.

When considering the outcomes from analysis, it is important for a company to understand that data produced needs to be compared to others within industry and close competitors. The company should also consider their past experience and how it corresponds to current and future performance expectations. Three common analysis tools are used for decision-making; horizontal analysis, vertical analysis, and financial ratios.

For our discussion of financial statement analysis, we will use Banyan Goods. Banyan Goods is a merchandising company that sells a variety of products. The image below shows the comparative income statements and balance sheets for the past two years.

*Figure 2.9 Comparative Income Statements and Balance Sheets.*

![](media/36109f8177bb6d7d5ee67dcb5d04c32a.png)

Keep in mind that the comparative income statements and balance sheets for Banyan Goods are simplified for our calculations and do not fully represent all the accounts a company could maintain. Let’s begin our analysis discussion by looking at horizontal analysis.

**Horizontal Analysis**

Horizontal analysis (also known as trend analysis) looks at trends over time on various financial statement line items. A company will look at one period (usually a year) and compare it to another period. For example, a company may compare sales from their current year to sales from the prior year. The trending of items on these financial statements can give a company valuable information on overall performance and specific areas for improvement. It is most valuable to do horizontal analysis for information over multiple periods to see how change is occurring for each line item. If multiple periods are not used, it can be difficult to identify a trend. The year being used for comparison purposes is called the base year (usually the prior period). The year of comparison for horizontal analysis is analyzed for dollar and percent changes against the base year.

The dollar change is found by taking the dollar amount in the base year and subtracting that from the year of analysis.

| **Dollar Change = Year of Analysis Amount – Base Year Amount** |
|----------------------------------------------------------------|

Using Banyan Goods as our example, if Banyan wanted to compare net sales in the current year (year of analysis) of \$120,000 to the prior year (base year) of \$100,000, the dollar change would be as follows:

Dollar change=\$120,000–\$1000,000=\$20,000

The percentage change is found by taking the dollar change, dividing by the base year amount, and then multiplying by 100.

![](media/7d905de4ebee510194dc1e92414700d2.png)

Let’s compute the percentage change for Banyan Goods’ net sales.

Percentage change= (\$20,000/\$100,000) ×100=20%

This means Banyan Goods saw an increase of \$20,000 in net sales in the current year as compared to the prior year, which was a 20% increase. The same dollar changes and percentage change calculations would be used for the income statement line items as well as the balance sheet line items. The image below shows the complete horizontal analysis of the income statement and balance sheet for Banyan Goods.

*Figure 2.10  Income Statements and Horizontal Analysis.*

![](media/1dc5ddc24d933bbd99ed9980ebec7cd4.png)

Depending on their expectations, Banyan Goods could make decisions to alter operations to produce expected outcomes. For example, Banyan saw a 50% accounts receivable increase from the prior year to the current year. If they were only expecting a 20% increase, they may need to explore this line item further to determine what caused this difference and how to correct it going forward. It could possibly be that they are extending credit more readily than anticipated or not collecting as rapidly on outstanding accounts receivable. The company will need to further examine this difference before deciding on a course of action. Another method of analysis Banyan might consider before making a decision is vertical analysis.

**Vertical Analysis**

Vertical analysis shows a comparison of a line item within a statement to another line item within that same statement. For example, a company may compare cash to total assets in the current year. This allows a company to see what percentage of cash (the comparison line item) makes up total assets (the other line item) during the period. This is different from horizontal analysis, which compares across years. Vertical analysis compares line items within a statement in the current year. This can help a business to know how much of one item is contributing to overall operations. For example, a company may want to know how much inventory contributes to total assets. They can then use this information to make business decisions such as preparing the budget, cutting costs, increasing revenues, or capital investments.

The company will need to determine which line item they are comparing all items to within that statement and then calculate the percentage makeup. These percentages are considered common-size because they make businesses within industry comparable by taking out fluctuations for size. It is typical for an income statement to use net sales (or sales) as the comparison line item. This means net sales will be set at 100% and all other line items within the income statement will represent a percentage of net sales.

On the balance sheet, a company will typically look at two areas: (1) total assets, and (2) total liabilities and stockholders’ equity. Total assets will be set at 100% and all assets will represent a percentage of total assets. Total liabilities and stockholders’ equity will also be set at 100% and all line items within liabilities and equity will be represented as a percentage of total liabilities and stockholders’ equity. The line item set at 100% is considered the base amount and the comparison line item is considered the comparison amount. The formula to determine the common-size percentage is:

![](media/0768b034443ce3c019856647c86333c0.png)

For example, if Banyan Goods set total assets as the base amount and wanted to see what percentage of total assets were made up of cash in the current year, the following calculation would occur.

Common-size percentage= (\$110,000/\$250,000) ×100=44%

Cash in the current year is \$110,000 and total assets equal \$250,000, giving a common-size percentage of 44%. If the company had an expected cash balance of 40% of total assets, they would be exceeding expectations. This may not be enough of a difference to make a change, but if they notice, this deviates from industry standards, they may need to make adjustments, such as reducing the amount of cash on hand to reinvest in the business. The image below shows the common-size calculations on the comparative income statements and comparative balance sheets for Banyan Goods.

*Figure 2.11 Income Statements and Vertical Analysis.*

![](media/589aa2b2ae851d5a84a198c79fbc2271.png)

Even though vertical analysis is a statement comparison within the same year, Banyan can use information from the prior year’s vertical analysis to make sure the business is operating as expected. For example, unearned revenues increased from the prior year to the current year and made up a larger portion of total liabilities and stockholders’ equity. This could be due to many factors, and Banyan Goods will need to examine this further to see why this change has occurred. Let’s turn to financial statement analysis using financial ratios.

**Overview of Financial Ratios**

Financial ratios help both internal and external users of information make informed decisions about a company. A stakeholder could be looking to invest, become a supplier, make a loan, or alter internal operations, among other things, based in part on the outcomes of ratio analysis. The information resulting from ratio analysis can be used to examine trends in performance, establish benchmarks for success, set budget expectations, and compare industry competitors. There are four main categories of ratios: liquidity, solvency, efficiency, and profitability. Note that while there are more ideal outcomes for some ratios, the industry in which the business operates can change the influence each of these outcomes has over stakeholder decisions.

**Liquidity Ratios**

Liquidity ratios show the ability of the company to pay short-term obligations if they came due immediately with assets that can be quickly converted to cash. This is done by comparing current assets to current liabilities. Lenders, for example, may consider the outcomes of liquidity ratios when deciding whether to extend a loan to a company. A company would like to be liquid enough to manage any currently due obligations but not too liquid where they may not be effectively investing in growth opportunities. Three common liquidity measurements are working capital, current ratio, and quick ratio.

*Working Capital*

Working capital measures the financial health of an organization in the short-term by finding the difference between current assets and current liabilities. A company will need enough current assets to cover current liabilities; otherwise, they may not be able to continue operations in the future. Before a lender extends credit, they will review the working capital of the company to see if the company can meet their obligations. A larger difference signals that a company can cover their short-term debts and a lender may be more willing to extend the loan. On the other hand, too large of a difference may indicate that the company may not be correctly using their assets to grow the business. The formula for working capital is:

![](media/60cae744a8a993f06e7445b5d90a4a0a.png)

Using Banyan Goods, working capital is computed as follows for the current year:

![A number with a black and white background Description automatically generated with medium confidence](media/14d2dd5700ee2babd8f22e3ef613a354.png)

In this case, current assets were \$200,000, and current liabilities were \$100,000. Current assets were far greater than current liabilities for Banyan Goods and they would easily be able to cover short-term debt.

The dollar value of the difference for working capital is limited given company size and scope. It is most useful to convert this information to a ratio to determine the company’s current financial health. This ratio is the current ratio.

*Current Ratio*

Working capital expressed as a ratio is the current ratio. The current ratio considers the amount of current assets available to cover current liabilities. The higher the current ratio, the more likely the company can cover its short-term debt. The formula for current ratio is:

![Current ratio equals current assets divided by current liabities.](media/1cdc7a8de24d2baace102f3f307ea3dd.jpeg)

The current ratio in the current year for Banyan Goods is:

![A smiley face with dollar signs Description automatically generated](media/abf9c49792213de4537c33480c21d859.png)

A 2:1 ratio means the company has twice as many current assets as current liabilities; typically, this would be plenty to cover obligations. This may be an acceptable ratio for Banyan Goods, but if it is too high, they may want to consider using those assets in a different way to grow the company.

*Quick Ratio*

The quick ratio, also known as the acid-test ratio, is similar to the current ratio except current assets are more narrowly defined as the most liquid assets, which exclude inventory and prepaid expenses. The conversion of inventory and prepaid expenses to cash can sometimes take more time than the liquidation of other current assets. A company will want to know what they have on hand and can use quickly if an immediate obligation is due. The formula for the quick ratio is:

![](media/c22bad27b4c3e47f21011f3e1f22ac66.png)

The quick ratio for Banyan Goods in the current year is:

![A number of dollars and dollar signs Description automatically generated with medium confidence](media/554fa23c6742bea321da58e90884f925.png)

A 1.6:1 ratio means the company has enough quick assets to cover current liabilities.

**Solvency Ratios**

Solvency implies that a company can meet its long-term obligations and will likely stay in business in the future. To stay in business the company must generate more revenue than debt in the long-term. Meeting long-term obligations includes the ability to pay any interest incurred on long-term debt. Two main solvency ratios are the debt-to-equity ratio and the times interest earned ratio.

*Debt to Equity Ratio*

The debt-to-equity ratio shows the relationship between debt and equity as it relates to business financing. A company can take out loans, issue stock, and retain earnings to be used in future periods to keep operations running. It is less risky and less costly to use equity sources for financing as compared to debt resources. This is mainly due to interest expense repayment that a loan carries as opposed to equity, which does not have this requirement. Therefore, a company wants to know how much debt and equity contribute to its financing. Ideally, a company would prefer more equity than debt financing. The formula for the debt-to-equity ratio is:

![](media/c9e8503ce4b0114d7f3e354ef19f9fb7.png)

The information needed to compute the debt-to-equity ratio for Banyan Goods in the current year can be found on the balance sheet.

![A math formula with numbers and symbols Description automatically generated with medium confidence](media/781c83a2f9e50f9e15d47379a5fe8104.png)

This means that for every \$1 of equity contributed toward financing, \$1.50 is contributed from lenders. This would be a concern for Banyan Goods. This could be a red flag for potential investors that the company could be trending toward insolvency. Banyan Goods might want to get the ratio below 1:1 to improve their long-term business viability.

*Times Interest Earned Ratio*

Time interest earned measures the company’s ability to pay interest expense on long-term debt incurred. This ability to pay is determined by the available earnings before interest and taxes (EBIT) are deducted. These earnings are considered the operating income. Lenders will pay attention to this ratio before extending credit. The more times over a company can cover interest, the more likely a lender will extend long-term credit. The formula for times interest earned is:

![](media/16e1ebbf35c207157b14f756d385c325.png)

The information needed to compute times interest earned for Banyan Goods in the current year can be found on the income statement.

![A math equation with numbers and symbols Description automatically generated with medium confidence](media/515cde4c645eee62a051846767468fcd.png)

The \$43,000 is the operating income, representing earnings before interest and taxes. The 21.5 times outcome suggests that Banyan Goods can easily repay interest on an outstanding loan and creditors would have little risk that Banyan Goods would be unable to pay.

**Efficiency Ratios**

Efficiency shows how well a company uses and manages their assets. Areas of importance with efficiency are management of sales, accounts receivable, and inventory. A company that is efficient typically will be able to generate revenues quickly using the assets it acquires. Let’s examine four efficiency ratios: accounts receivable turnover, total asset turnover, inventory turnover, and days’ sales in inventory.

*Accounts Receivable Turnover*

Accounts receivable turnover measures how many times in a period (usually a year) a company will collect cash from accounts receivable. A higher number of times could mean cash is collected more quickly and that credit customers are of high quality. A higher number is usually preferable because the cash collected can be reinvested in the business at a quicker rate. A lower number of times could mean cash is collected slowly on these accounts and customers may not be properly qualified to accept the debt. The formula for accounts receivable turnover is:

![](media/5b2bc2506e03c02590e38ddba8dd3880.png)

![](media/3c1771cc6270876051b2dddcef01c0f6.png)

Many companies do not split credit and cash sales, in which case net sales would be used to compute accounts receivable turnover. Average accounts receivable is found by dividing the sum of beginning and ending accounts receivable balances found on the balance sheet. The beginning accounts receivable balance in the current year is taken from the ending accounts receivable balance in the prior year.

When computing the accounts receivable turnover for Banyan Goods, let’s assume net credit sales make up \$100,000 of the \$120,000 of the net sales found on the income statement in the current year.

![A black and white text Description automatically generated with medium confidence](media/450a3b220b7a80d86906cff7e4a5374d.png)

An accounts receivable turnover of four times per year may be low for Banyan Goods. Given this outcome, they may want to consider stricter credit lending practices to make sure credit customers are of a higher quality. They may also need to be more aggressive with collecting any outstanding accounts.

*Total Asset Turnover*

Total asset turnover measures the ability of a company to use their assets to generate revenues. A company would like to use as few assets as possible to generate the most net sales. Therefore, a higher total asset turnover means the company is using their assets very efficiently to produce net sales. The formula for total asset turnover is:

![](media/896fcb48d0e409e5c6825c5cfea0b282.png)

![](media/8bff711c02c54fb57f5dfaf2ce2435e0.png)

Average total assets are found by dividing the sum of beginning and ending total assets balances found on the balance sheet. The beginning total assets balance in the current year is taken from the ending total assets balance in the prior year.

Banyan Goods’ total asset turnover is:

![A close-up of numbers Description automatically generated](media/a9ae6c19189c734d61149380eaec654b.png)

The outcome of 0.53 means that for every \$1 of assets, \$0.53 of net sales are generated. Over time, Banyan Goods would like to see this turnover ratio increase.

*Inventory Turnover*

Inventory turnover measures how many times during the year a company has sold and replaced inventory. This can tell a company how well inventory is managed. A higher ratio is preferable; however, an extremely high turnover may mean that the company does not have enough inventory available to meet demand. A low turnover may mean the company has too much supply of inventory on hand. The formula for inventory turnover is:

![Inventory turnover equals cost of goods sold divided by average inventory. Average inventory equals the sum of beginning inventory and ending inventory divided by two.](media/32ce71ff9a1b29946b364cbe39be1034.jpeg)

Cost of goods sold for the current year is found on the income statement. Average inventory is found by dividing the sum of beginning and ending inventory balances found on the balance sheet. The beginning inventory balance in the current year is taken from the ending inventory balance in the prior year.

![A math equations with numbers Description automatically generated with medium confidence](media/a3c94e218941bce7b9e9632b29216072.png)

*Days’ Sales in Inventory*

Days’ sales in inventory expresses the number of days it takes a company to turn inventory into sales. This assumes that no new purchase of inventory occurred within that time period. The fewer the number of days, the more quickly the company can sell its inventory. The higher the number of days, the longer it takes to sell its inventory. The formula for days’ sales in inventory is:

![Days’ sales in inventory equals ending inventory divided by cost of goods sold, times 365.](media/de5112d311b6873dcc83c1c980e15803.jpeg)

Banyan Goods’ days’ sales in inventory is:

![A close-up of a number Description automatically generated](media/8ba9a0e30827c6048f449cb6c0a7cf2b.png)

243 days is a long time to sell inventory. While industry dictates what is an acceptable number of days to sell inventory, 243 days is unsustainable long-term. Banyan Goods will need to better manage their inventory and sales strategies to move inventory more quickly.

**Profitability Ratios**

Profitability considers how well a company produces returns given their operational performance. The company needs to leverage its operations to increase profit. To assist with profit goal attainment, company revenues need to outweigh expenses. Let’s consider three profitability measurements and ratios: profit margin, return on total assets, and return on equity.

*Profit Margin*

Profit margin represents how much of sales revenue has translated into income. This ratio shows how much of each \$1 of sales is returned as profit. The larger the ratio figure (the closer it gets to 1), the more of each sales dollar is returned as profit. The portion of the sales dollar not returned as profit goes toward expenses. The formula for profit margin is:

![Profit margin equals net income divided by net sales.](media/c51361060aed7ea9f7fbda1ce51896b0.jpeg)

For Banyan Goods, the profit margin in the current year is:

![A number of numbers and a equal sign Description automatically generated with medium confidence](media/8f4baa0b6feb7df19e4ac5ef527804a1.png)

This means that for every dollar of sales, \$0.29 returns as profit. If Banyan Goods thinks this is too low, the company would try and find ways to reduce expenses and increase sales.

*Return on Total Assets*

The return on total assets measures the company’s ability to use its assets successfully to generate a profit. The higher the return (ratio outcome), the more profit is created from asset use. Average total assets are found by dividing the sum of beginning and ending total assets balances found on the balance sheet. The beginning total assets balance in the current year is taken from the ending total assets balance in the prior year. The formula for return on total assets is:

![Return on total assets equals net income divided by average total assets. Average total assets equals the sum of beginning total assets and ending total assets divided by two.](media/37e8459aa9a12c4acf3e8680a48a906c.jpeg)

For Banyan Goods, the return on total assets for the current year is:

![A number of numbers and symbols Description automatically generated with medium confidence](media/29418bcf4887c92fad1769698d48ee81.png)

The higher the figure, the better the company is using its assets to create a profit. Industry standards can dictate what is an acceptable return.

*Return on Equity*

Return on equity measures the company’s ability to use its invested capital to generate income. The invested capital comes from stockholders investments in the company’s stock and its retained earnings and is leveraged to create profit. The higher the return, the better the company is doing at using its investments to yield a profit. The formula for return on equity is:

![Return on equity equals net income divided by average stockholder equity. Average stockholder equity equals the sum of beginning stockholder equity and ending stockholder equity divided by two.](media/b8f5dcc7ca3a1fcfa8ab359ca97023dc.jpeg)

Average stockholders’ equity is found by dividing the sum of beginning and ending stockholders’ equity balances found on the balance sheet. The beginning stockholders’ equity balance in the current year is taken from the ending stockholders’ equity balance in the prior year. Keep in mind that the net income is calculated after preferred dividends have been paid.

For Banyan Goods, we will use the net income figure and assume no preferred dividends have been paid. The return on equity for the current year is:

![A black numbers and a white background Description automatically generated with medium confidence](media/5c56fae04801243740d4eee5a67c6ef5.png)

The higher the figure, the better the company is using its investments to create a profit. Industry standards can dictate what is an acceptable return.

**Advantages and Disadvantages of Financial Statement Analysis**

There are several advantages and disadvantages to financial statement analysis. Financial statement analysis can show trends over time, which can be helpful in making future business decisions. Converting information to percentages or ratios eliminates some of the disparity between competitor sizes and operating abilities, making it easier for stakeholders to make informed decisions. It can assist with understanding the makeup of current operations within the business, and which shifts need to occur internally to increase productivity.

A stakeholder needs to keep in mind that past performance does not always dictate future performance. Attention must be given to possible economic influences that could skew the numbers being analyzed, such as inflation or a recession. Additionally, the way a company reports information within accounts may change over time. For example, where and when certain transactions are recorded may shift, which may not be readily evident in the financial statements.

A company that wants to budget properly, control costs, increase revenues, and make long-term expenditure decisions may want to use financial statement analysis to guide future operations. As long as the company understands the limitations of the information provided, financial statement analysis is a good tool to predict growth and company financial strength.

### Comprehension Check

Placeholder for comprehension check questions.
`);

const testAnchor = ref(null);

const scrollToContent = () => {
  console.log('Called MarkdownRenderer/scrollToContent')
}

onMounted(() => {
  const scrollToContentMounted = () => {
    console.log('Called MarkdownRenderer/scrollToContentMounted')
    var element = this.$refs['TestAnchor'];
    var top = element.offsetTop;
    window.scrollTo(0, top);
  }
})

defineExpose({
  testAnchor,
  scrollToContent
});
</script>

<template>
  <div class="p-5 border-2 border-dashed surface-border border-round surface-section flex-1 overflow-auto" v-html="result">
  </div>
</template>

<style>
h2 {
  font-size: 2.2rem;
}
h3 {
  font-size: 1.6rem;
  margin-top: 1vh;
}
p {
  margin-top: 1vh;
}
strong {
  font-weight: bold
}
em {
  font-style: italic;
}
img{
  max-width: 75%;
  margin-left: auto;
  margin-right: auto;
}
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>