# Portfolio Theory Hub

## Definition

Portfolio theory is the **study of how to construct optimal investment portfolios** by balancing risk and return through diversification and asset allocation. It provides mathematical frameworks for making rational investment decisions under uncertainty.

---

## Core Foundations

### Risk-Return Tradeoff

> Higher returns require accepting higher risk

- **Expected return** — weighted average of possible outcomes
- **Risk (variance/volatility)** — dispersion of possible outcomes
- **Sharpe ratio** — risk-adjusted return measure

**Core idea:** Investors demand compensation (higher returns) for bearing risk.

---

### Diversification Principle

> Don't put all eggs in one basket

- **Idiosyncratic risk** — firm-specific risk (diversifiable)
- **Systematic risk** — market-wide risk (non-diversifiable)
- **Correlation** — how assets move together

**Core idea:** Combining uncorrelated assets reduces total portfolio risk.

---

## Modern Portfolio Theory (MPT)

### Mean-Variance Optimization

> Maximize expected return for a given risk level, or minimize risk for a given return

- **Expected portfolio return**: Weighted average of individual asset returns
- **Portfolio variance**: Depends on individual variances and covariances

```text
E[Rₚ] = Σ wᵢE[Rᵢ]
Var(Rₚ) = ΣᵢΣⱼ wᵢwⱼCov(Rᵢ,Rⱼ)
```

---

### Efficient Frontier

> Set of optimal portfolios offering highest return for each risk level

- **Feasible set** — all possible portfolio combinations
- **Efficient frontier** — northwest boundary of feasible set
- **Inefficient portfolios** — dominated by frontier portfolios

**Core idea:** Rational investors choose portfolios on the efficient frontier.

---

### Capital Market Line (CML)

> Risk-return combinations available with risk-free borrowing/lending

- **Risk-free asset** — zero risk, certain return (e.g., T-bills)
- **Tangency portfolio** — optimal risky portfolio
- **Leverage** — borrowing at risk-free rate to invest in tangency portfolio

---

## Capital Asset Pricing Model (CAPM)

### Security Market Line (SML)

> Expected return depends on systematic risk (beta)

```text
E[Rᵢ] = R_f + βᵢ(E[Rₘ] - R_f)
```

Where:

- **β (beta)** — measure of systematic risk
- **Market risk premium** — E[Rₘ] - R_f
- **Security characteristic line** — regression of asset returns vs market returns

---

### Beta Interpretation

- **β = 1** — moves with market (average risk)
- **β > 1** — more volatile than market
- **β < 1** — less volatile than market
- **β = 0** — uncorrelated with market

---

## Asset Pricing Models

### Arbitrage Pricing Theory (APT)

> Expected returns depend on multiple systematic factors

```text
E[Rᵢ] = R_f + β₁ᵢF₁ + β₂ᵢF₂ + ... + βₖᵢFₖ
```

- **Factors** — macroeconomic variables (inflation, GDP growth, etc.)
- **Arbitrage** — ensures factor sensitivities determine prices

---

### Fama-French Three-Factor Model

> Extends CAPM with size and value factors

```text
E[Rᵢ] - R_f = βₘ(Rₘ - R_f) + βₛSMB + βᵥHML
```

- **SMB (Small Minus Big)** — size factor
- **HML (High Minus Low)** — value factor

---

### Carhart Four-Factor Model

> Adds momentum factor

```text
E[Rᵢ] - R_f = βₘ(Rₘ - R_f) + βₛSMB + βᵥHML + βₘₒWML
```

- **WML (Winners Minus Losers)** — momentum factor

---

## Portfolio Construction

### Asset Allocation

- **Strategic allocation** — long-term target weights
- **Tactical allocation** — short-term market timing
- **Core and satellite** — stable core with active satellites

### Rebalancing

- **Calendar rebalancing** — periodic (quarterly, annually)
- **Percentage rebalancing** — when weights deviate by threshold
- **Constant mix** — maintain target allocation

---

## Risk Measures

### Traditional Measures

- **Variance/Standard deviation** — total risk
- **Value at Risk (VaR)** — maximum expected loss
- **Expected shortfall** — average loss beyond VaR

### Risk-Adjusted Performance

- **Sharpe ratio** — excess return per unit volatility
- **Sortino ratio** — excess return per unit downside deviation
- **Information ratio** — active return per unit tracking error

---

## Portfolio Optimization

### Markowitz Optimization

> Mathematical programming to find efficient portfolios

- **Objective**: Maximize return or minimize risk
- **Constraints**: Budget, bounds, turnover limits
- **Quadratic programming** for mean-variance optimization

---

### Black-Litterman Model

> Incorporates investor views with market equilibrium

- **Market equilibrium** — reverse-engineer market weights
- **Investor views** — subjective return forecasts
- **Bayesian updating** — blend views with market priors

---

## Behavioral Portfolio Theory

### Mental Accounting

> People treat money differently based on source/purpose

- **Mental buckets** — separate accounts for different goals
- **House money effect** — riskier behavior with "free" money
- **Disposition effect** — hold losers, sell winners

---

### Prospect Theory

> Value function is S-shaped (loss aversion)

- **Reference point** — current wealth level
- **Loss aversion** — losses hurt more than gains please
- **Diminishing sensitivity** — marginal utility decreases

---

## Performance Measurement

### Benchmarking

- **Absolute returns** — total portfolio return
- **Relative returns** — vs benchmark (alpha)
- **Risk-adjusted returns** — Sharpe, Sortino ratios

### Attribution Analysis

- **Asset allocation effect** — sector/country weightings
- **Security selection effect** — individual stock picks
- **Interaction effect** — combined impact

---

## Factor Investing

### Smart Beta Strategies

- **Value** — low P/E, P/B ratios
- **Growth** — high earnings growth
- **Quality** — low debt, stable earnings
- **Momentum** — recent winners
- **Low volatility** — stable stocks

### Risk Parity

> Allocate based on risk contribution, not capital

- **Equal risk contribution** — each asset contributes equal risk
- **Volatility targeting** — maintain constant portfolio volatility
- **Diversification across risk sources**

---

## International Portfolio Theory

### Home Bias

> Investors overweight domestic assets

- **Information asymmetry** — better knowledge of local markets
- **Currency risk** — exchange rate fluctuations
- **Regulatory barriers** — capital controls, taxes

### Currency Hedging

- **Passive hedging** — match currency exposure
- **Active hedging** — currency speculation
- **Natural hedging** — operational offsets

---

## Portfolio Management Process

### Investment Policy Statement (IPS)

- **Risk tolerance** — acceptable volatility
- **Time horizon** — investment timeline
- **Liquidity needs** — cash requirements
- **Tax considerations** — after-tax returns

### Implementation

1. **Asset allocation** — strategic weights
2. **Security selection** — individual investments
3. **Execution** — trading and costs
4. **Monitoring** — performance and rebalancing

---

## Criticisms & Extensions

### MPT Limitations

- **Estimation error** — inputs are uncertain
- **Non-normal returns** — fat tails, skewness
- **Transaction costs** — ignored in basic models
- **Taxes and liquidity** — real-world constraints

### Post-Modern Portfolio Theory

- **Downside risk** — focus on losses, not volatility
- **Higher moments** — skewness and kurtosis
- **Behavioral factors** — psychological biases

---

## Mental Model

> Portfolio theory is a **mathematical framework for making rational investment decisions** by quantifying the risk-return tradeoff and demonstrating that diversification can reduce risk without sacrificing expected returns.

---

## Learning Path

1. **Risk-Return Fundamentals** — basic concepts
2. **Modern Portfolio Theory** — Markowitz optimization
3. **CAPM** — single-factor model
4. **Multi-Factor Models** — Fama-French, arbitrage pricing
5. **Portfolio Construction** — implementation and rebalancing
6. **Behavioral Aspects** — psychological factors
7. **Advanced Topics** — risk parity, factor investing

---

# Related Concepts

- [[Asset Pricing Models]] — valuation frameworks
- [[Risk Management]] — hedging and insurance
- [[Behavioral Finance]] — psychological biases
- [[Financial Markets & Institutions]] — market structure
- [[Investment Strategies]] — practical implementation
